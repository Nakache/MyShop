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
import { ConfirmDialogModule } from './modules/confirmDialog.module';
import { FooterComponent } from './component/footer/footer.component';
import { SnackbarComponent } from './component/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SnackbarComponent,
  ],
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
  schemas: [],
})
export class AppModule {}
