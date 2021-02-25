import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  ViewChild,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Shop } from './models/shop';
import { ShopService } from './services/shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MyShopFront';
  mobileQuery!: MediaQueryList;
  private _mobileQueryListener!: () => void;

  @ViewChild('sidenav', { static: true })
  sidenav!: MatSidenav;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
