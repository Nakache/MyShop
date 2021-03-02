import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, observable, Subject } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Shop } from 'src/app/models/shop';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { ShopService } from 'src/app/services/shop.service';
import { ShopAddComponent } from '../shop-add/shop-add.component';
import { ShopEditComponent } from '../shop-edit/shop-edit.component';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit, AfterViewInit {
  public shops: Shop[] = [];
  private idArray: number[] = []; // Create array for checkbox selection in table.
  private idColumn = 'id';
  public displayedColumns = ['select', 'name', 'siren', 'capacity', 'options'];

  // paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  data!: MatTableDataSource<Shop>;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public array: any;
  pageEvent!: PageEvent;

  //spinner
  isLoadingResults = true;
  isRateLimitReached = false;

  //search
  public search = '';

  constructor(
    private shopService: ShopService,
    private dialogService: ConfirmDialogService,
    public dialog: MatDialog
  ) {
    this.shopService.getAllShop().subscribe((data: any) => {
      if (data.error) {
        console.log('error4');
      } else {
        console.log(1);
        this.isLoadingResults = false;
        this.data = new MatTableDataSource<Shop>(data);
        this.data.paginator = this.paginator;
        this.array = data;
        this.totalSize = this.array.length;
        this.iterator();
      }
    });
  }

  public handlePage(e: any) {
    console.log('paginator');
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.data = part;
  }

  public doFilter(e: Event) {
    console.log(this.data);
    this.data.filter = (e.target as HTMLTextAreaElement).value
      .trim()
      .toLocaleLowerCase();
    console.log(this.data.filter);
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    console.log(2);
  }

  // SELECT BOX
  public selectShop(selectedShop: any) {
    return this.idArray.push(selectedShop);
  }
  // --------------- ADD ------------------
  public addRecord() {
    const dialogRef = this.dialog.open(ShopAddComponent, {
      width: '250px',
      data: {},
    });
  }
  // --------------- DELETE ------------------

  public deleteRecord(recordId: any) {
    const dsData = this.shops;
    console.log(dsData);

    const name = 'name';
    const siren = 'siren';
    const record = dsData.find(({ id }) => id === recordId);
    const optionDialog = {
      title: 'confirm',
      message: 'confirmMessage',
      cancelText: 'cancel',
      confirmText: 'confirmText',
    };
    ('http://localhost:8000/api/shops/p');
    //  const url = `${this.membersUrl}/${recordId}`;

    const url = `http://localhost:8000/api/shops/${recordId}`;

    // Call the confirm dialog component
    this.dialogService.open(optionDialog);
    this.dialogService
      .confirmed()
      .pipe(
        switchMap((res) => {
          if (res === true) {
            console.log('url: ', url);
            return this.shopService.removeShop(recordId);
            //   return this.httpService.deleteRecord(url);
          } else {
            return 'error remove';
          }
        })
      )
      .subscribe((confirmed) => {
        this.success();
        // Refresh DataTable to remove row.
        this.deleteRowDataTable(
          recordId,
          this.idColumn,
          //    this.paginator,
          this.shops
        );
      });
  }

  private deleteRowDataTable(
    recordId: number,
    idColumn: string,
    shops: Shop[]
  ) {
    const dsData = shops;
    const itemIndex = dsData.findIndex(({ id }) => id === recordId);
    shops.splice(itemIndex, 1);
    //  dataSource.paginator = paginator;
  }

  private success() {
    console.log('success');
  }
}
