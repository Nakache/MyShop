import { Route, RouterModule } from '@angular/router';
import { ShopContainerComponent } from './shop-container.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ShopEditComponent } from './shop-edit/shop-edit.component';

const SHOP_ROUTES: Route[] = [
  {
    path: 'shop',
    component: ShopContainerComponent,
    children: [
      { path: 'new', component: ShopEditComponent },
      { path: 'index/edit', component: ShopEditComponent },
      { path: 'index', component: ShopDetailsComponent },
      { path: '', component: ShopDetailsComponent },
    ],
  },
];

export const shopRouting = RouterModule.forChild(SHOP_ROUTES);
