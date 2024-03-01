import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
productList:any[]=[];
searchValue: string = '';
constructor(private _product:ProductsService , private _cart:CartService,private _wish:WishlistService, private toastr:ToastrService){}


ngOnInit():void{
  this.allProducts()
}

allProducts(){
  this._product.getProducts().subscribe({
    next: (response) => {
      this.productList = response.data;
    },
    error: (err) => {
      console.log(err);
    }
  })

}

addToMyCart(_id: string) {
  this._cart.addToCart(_id).subscribe({
    next: (response) => {
      this._cart.cartNumber.next(response.numOfCartItems);
      this.toastr.success(response.message, '', {
        closeButton: true,
      });
    },
    error: (err) => {
      console.log(err);
    }
  })
}



addToMyWishList(Id: string) {
  this._wish.addToWishList(Id).subscribe({
    next: (response) => {
      this._wish.wishNumber.next(response.count);
      this.toastr.success(response.message)
    },
    error: (err) => {
      console.log(err);
    }

  })
}


}



