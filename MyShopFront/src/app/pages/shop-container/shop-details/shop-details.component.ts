import { Component, Input, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss'],
})
export class ShopDetailsComponent implements OnInit {
  index!: string;
  @Input() shop: Shop | undefined;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}
}
