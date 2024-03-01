 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-productDetails',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
productDetails:any;
  constructor(private _activated:ActivatedRoute,private _product:ProductsService, private _cart:CartService,private toastr:ToastrService) { }

  ngOnInit() {

let productId = this._activated.snapshot.params['Id'];
this._product.productDetails(productId).subscribe({
next:(response)=>{
  this.productDetails = response.data;
},
error:(err)=>{console.log(err);}

})


  }


  addToMyCart(_id:string){

    this._cart.addToCart(_id).subscribe({
      next:(response)=>{    
        this.toastr.success(response.message, '',{
        closeButton:true,
       
      });;
      },
      error:(err)=>{console.log(err);
      }
    })
  }

}
