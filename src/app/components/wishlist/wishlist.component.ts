
import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
wishItem:any;

  constructor(private _wish:WishlistService) { }

  ngOnInit():void {
    this.getMyWishList()
  }

  getMyWishList(){
    this._wish.addMyWishList().subscribe({
      next:(response)=>{
        this.wishItem = response.data
        // this._wish.wishNumber.next(response.count)
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
    },
    error:(err)=>{console.log(err);
    }
  })
}

}
