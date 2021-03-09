import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../component/confirm-dialog/confirm-dialog.component';
@Injectable()
export class ConfirmDialogService {
  constructor(private dialog: MatDialog) {}
  dialogRef!: MatDialogRef<ConfirmDialogComponent>;

  public open(options: {
    title: any;
    message: any;
    cancelText: any;
    confirmText: any;
  }) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText,
      },
    });
  }
  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(
      map((res) => {
        return res;
      })
    );
  }
}
