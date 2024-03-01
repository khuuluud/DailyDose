
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
wishItem:any;

  constructor(private _wish:WishlistService, private _cart:CartService, private toastr:ToastrService) { }

  ngOnInit():void {
    this.getMyWishList()
  }

  getMyWishList(){
    this._wish.addMyWishList().subscribe({
      next:(response)=>{
        this.wishItem = response.data
      },
      error:(err)=>{console.log(err);
      }
    })
  }
 
deleteMywishListItem(id:string){
  this._wish.deletMyWishList(id).subscribe({
    next:(response)=>{
      this.wishItem = response.data
      this._wish.wishNumber.next(response.count)
      this.getMyWishList()
      console.log(response);
      
    },
    error:(err)=>{console.log(err);
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
}
