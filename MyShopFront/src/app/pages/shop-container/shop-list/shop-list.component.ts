import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Shop } from 'src/app/models/shop';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { ShopService } from 'src/app/services/shop.service';
import { ShopAddComponent } from '../shop-add/shop-add.component';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['name', 'siren', 'capacity', 'options'];

  // paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  data!: MatTableDataSource<Shop>;
  public pageSize = 10;
  public totalSize = 0;
  public array: any;
  public pageEvent!: PageEvent;

  //spinner
  isLoadingResults = true;
  isRateLimitReached = false;

  public currentShop: Shop | undefined;
  constructor(
    private shopService: ShopService,
    private dialogService: ConfirmDialogService,
    public dialog: MatDialog
  ) {
    this.shopService.getAllShop().subscribe((data: any) => {
      if (data.error) {
      } else {
        this.data = new MatTableDataSource<Shop>(data['hydra:member']);
        this.isLoadingResults = false;
        setTimeout(() => (this.data.paginator = this.paginator));
        this.array = data['hydra:member'];
        this.totalSize = this.array.length;
      }
    });
  }

  getCurrentShop(shopId: number) {
    let shop: Shop | undefined;
    shop = this.data.data.find((obj) => obj.id == shopId);
    this.currentShop = shop;
  }

  getShop(page: number) {
    this.shopService.getShop(page).subscribe((data: any) => {
      if (data.error) {
      } else {
        this.data = new MatTableDataSource<Shop>(data['hydra:member']);
        this.isLoadingResults = false;
      }
    });
  }

  ngOnInit(): void {}
  ngAfterViewInit() {}

  // --------------- ADD ------------------
  public addShop() {
    const dialogRef = this.dialog.open(ShopAddComponent, {
      width: '400px',
      autoFocus: false,
      data: {},
    });
  }
  // --------------- DELETE ------------------

  public deleteShop(shopId: number, shopName: string) {
    const url = `http://localhost:8000/api/shops/${shopId}`;
    const optionDialog = {
      title: 'delete shop',
      message: `do you want to delete ${shopName}`,
      cancelText: 'cancel',
      confirmText: 'delete',
    };

    this.dialogService.open(optionDialog);

    this.dialogService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.shopService.removeShop(shopId);
        this.success();
        // Refresh DataTable to remove row.
        const index = this.data.data.findIndex((obj) => obj.id == shopId);
        this.data.data.splice(index, 1);

        this.data = new MatTableDataSource<Shop>(this.data.data);
        setTimeout(() => {
          this.data.paginator = this.paginator;
        });
      }
    });
  }

  private success() {
    console.log('success');
  }

  applyFilter(e: Event) {
    let filterValue = (e.target as HTMLTextAreaElement).value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.data.filter = filterValue;
  }
}
