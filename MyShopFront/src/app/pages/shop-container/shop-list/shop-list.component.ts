import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Shop } from 'src/app/models/shop';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { ShopService } from 'src/app/services/shop.service';
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
  public shopEditComponent!: ShopEditComponent;
  constructor(
    private shopService: ShopService,
    private dialogService: ConfirmDialogService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.shopService.getAllShop().subscribe((data: Shop[]) => {
      console.log(data);
      this.shops = data;
    });
  }
  ngAfterViewInit() {}

  // SELECT BOX
  public selectShop(selectedShop: any) {
    return this.idArray.push(selectedShop);
  }
  // --------------- ADD ------------------
  public addRecord() {
    //  this.dialog.open(this.shopEditComponent);
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
