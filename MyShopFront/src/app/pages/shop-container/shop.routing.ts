import { Route, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ShopContainerComponent } from './shop-container.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ShopEditComponent } from './shop-edit/shop-edit.component';

const SHOP_ROUTES: Route[] = [
  {
    path: 'shops',
    component: ShopContainerComponent,
    children: [
      { path: 'new', component: ShopEditComponent },
      { path: 'index/edit', component: ShopEditComponent },
      { path: 'index', component: ShopDetailsComponent },
    ],
  },
];

export const shopRouting = RouterModule.forChild(SHOP_ROUTES);
