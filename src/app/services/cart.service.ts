import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartNumber = new BehaviorSubject(0)
  headers: any = {
    token: localStorage.getItem('userToken')
  }
  constructor(private _http: HttpClient) {
    this.getItemOfCart().subscribe({
      next: (response) => {
        this.cartNumber.next(response.numOfCartItems)

      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  addToCart(id: string): Observable<any> {
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: id
      },
      {
        headers: this.headers
      }
    )
  }


  getItemOfCart(): Observable<any> {
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/cart`,

      {
        headers: this.headers
      }
    )
  }

  updatCart(count: number, id: string): Observable<any> {
    return this._http.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        count: count
      },
      {
        headers: this.headers
      }
    )
  }

  deleteCart(id: string): Observable<any> {
    return this._http.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,

      {
        headers: this.headers
      }
    )
  }

  checkOut(id:string,formData:any): Observable<any> {
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,

      {
        shippingAddress:formData
      }
      ,
      {
        headers: this.headers
      }
    )
  }

}
