import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllordersService {

  constructor(private _http: HttpClient) { }

 
  getUserOrders(id: string): Observable<any> {

    return this._http.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
  }

}
