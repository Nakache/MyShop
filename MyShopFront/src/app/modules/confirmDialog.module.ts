import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmDialogService } from '../services/confirm-dialog.service';
import { ConfirmDialogComponent } from '../component/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './material/material.module';
@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, MaterialModule],
  declarations: [ConfirmDialogComponent],
  exports: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent],
  providers: [ConfirmDialogService],
})
export class ConfirmDialogModule {}
