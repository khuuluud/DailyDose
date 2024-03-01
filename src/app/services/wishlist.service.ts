import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WishlistService implements OnInit {
  [x: string]: any;

  wishNumber = new BehaviorSubject(0)
  headers: any = {
    token: localStorage.getItem('userToken')
  }
  constructor(private _http:HttpClient) {

   this.addMyWishList().subscribe({
     next:(response)=>{ 
       this.wishNumber.next(response.count)
    
     },
     error:(err)=>{console.log(err);
     }
   })
   }

  ngOnInit(): void {
   
  }

addToWishList(id:string):Observable<any>{

return this._http.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
  productId: id
},
{
  headers: this.headers
})
}

addMyWishList():Observable<any>{

return this._http.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, 
{
  headers: this.headers
})
}

deletMyWishList(id:string):Observable<any>{
return this._http.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
{
  headers: this.headers
})

}


}
