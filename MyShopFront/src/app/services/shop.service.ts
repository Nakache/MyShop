import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Shop } from '../models/shop';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  userSubject = new Subject<Shop[]>();
  userSubject$ = this.userSubject.asObservable();

  getAllShop(): Observable<any> {
    const url = `http://localhost:8000/api/shops?page=1"`;
    return this.http.get<any>(url).pipe(
      map((x) => JSON.stringify(x)),
      map((x) => JSON.parse(x)),
      pluck('hydra:member')
    );
  }
}
