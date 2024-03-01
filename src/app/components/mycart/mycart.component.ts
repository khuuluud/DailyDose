import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  cartItem: any;
  constructor(private _cart: CartService) { }

  ngOnInit() {
    this.getMyCart()
  }

  getMyCart() {
    this._cart.getItemOfCart().subscribe({
      next: (response) => {
        this.cartItem = response.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  updateMycart(count: number, id: string) {
    this._cart.updatCart(count, id).subscribe({
      next: (response) => {
        this.cartItem = response.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  deleteCart(id: string) {
    this._cart.deleteCart(id).subscribe({
      next: (response) => {
        this.cartItem = response.data;
        this._cart.cartNumber.next(response.numOfCartItems)
        
      },
      error: (err) => {
        console.log(err);

      }
    })
  }


}
