import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { catchError, map, pluck } from 'rxjs/operators';
import { SnackbarComponent } from '../component/snackbar/snackbar.component';
import { Shop } from '../models/shop';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient, public snackBar: MatSnackBar) {}

  getShop(page: number): Observable<any> {
    const basUri = 'http://localhost:8000/api/shops';
    const url = `${basUri}?page=${page + 1}`;

    return this.http.get<any>(url);
  }

  getAllShop(): Observable<any> {
    const url = `http://localhost:8000/api/shops`;
    return this.http.get<any>(url);
  }

  removeShop(id: number) {
    const url = `http://localhost:8000/api/shops/${id}`;
    console.log(url);
    return this.http.delete<any>(url).subscribe(
      () => {
        this.openSnackBar('shop deleted', 'remove');
        console.log('Shop deleted !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  addShop(shop: Shop) {
    const url = `http://localhost:8000/api/shops`;
    return this.http.post(url, shop, this.httpOptions).subscribe(
      () => {
        this.openSnackBar('shop created', 'sucess');
        console.log('add terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'mon-jeton',
    }),
  };

  openSnackBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: panelClass,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: 10000,
    });
  }
}
