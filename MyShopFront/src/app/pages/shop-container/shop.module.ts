import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { shopRouting } from './shop.routing';
import { ShopContainerComponent } from './shop-container.component';
import { ShopEditComponent } from './shop-edit/shop-edit.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [
    ShopContainerComponent,
    ShopEditComponent,
    ShopDetailsComponent,
    ShopListComponent,
  ],
  imports: [CommonModule, RouterModule, shopRouting, MaterialModule],
})
export class ShopModule {}
