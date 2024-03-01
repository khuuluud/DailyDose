import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkoutpayment',
  templateUrl: './checkoutpayment.component.html',
  styleUrls: ['./checkoutpayment.component.scss']
})
export class CheckoutpaymentComponent implements OnInit{
constructor(private _cart:CartService){ }
  ngOnInit(): void {
    this.getMyCart()
  }
  checkOut = new FormGroup({
    details:new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),

  })

cartId:string='';

  getMyCart() {
    this._cart.getItemOfCart().subscribe({
      next: (response) => {
       this.cartId = response.data._id
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  payment(form:FormGroup){
console.log(form.value);
this._cart.checkOut(this.cartId,form.value).subscribe({
  next:(response)=>{
    console.log(response);
    window.location = response.session.url
  },
  error:(err)=>{
    console.log(err);
  }
})
  }
}
