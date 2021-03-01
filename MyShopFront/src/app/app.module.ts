import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './component/header/header.component';
import { ShopModule } from './pages/shop-container/shop.module';
import { MaterialModule } from './modules/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from './services/confirm-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCheckboxModule,
    HttpClientModule,
    ShopModule,
  ],
  providers: [ConfirmDialogService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
