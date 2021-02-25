import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  shops: Shop[] = [];
  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopService.getAllShop().subscribe((data: Shop[]) => {
      console.log(data);
      this.shops = data;
    });
  }
}
