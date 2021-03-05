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
import { ConfirmDialogModule } from './modules/confirmDialog.module';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCheckboxModule,
    HttpClientModule,
    ShopModule,
    ConfirmDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
