import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Shop } from 'src/app/models/shop';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop-add',
  templateUrl: './shop-add.component.html',
  styleUrls: ['./shop-add.component.scss'],
})
export class ShopAddComponent implements OnInit {
  public shopForm!: FormGroup;
  public shop!: Shop;

  constructor(
    private fb: FormBuilder,
    private shopService: ShopService,
    private mdDialogRef: MatDialogRef<ShopAddComponent>
  ) {}

  ngOnInit() {
    this.initForm();
  }

  ngAfterViewInit() {}

  saveShop() {
    console.log(this.shopForm.value);
    //  this.shopService.addShop(this.shopForm.value);
    this.close(false);
  }

  initForm(shop = { name: '', siren: '', capacity: 0 }) {
    this.shopForm = this.fb.group({
      name: [shop.name],
      siren: [shop.siren],
      capacity: [shop.capacity],
    });
  }

  public cancel() {
    this.close(false);
  }
  public close(value: boolean) {
    this.mdDialogRef.close(value);
  }
}
