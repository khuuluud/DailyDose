
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchValue: string = '';

  constructor(private _product: ProductsService, private _cart: CartService, private toastr: ToastrService, private _wish: WishlistService) { }

  productList: Products[] = [];
  wishItem:any;

  ngOnInit(): void {
    this._product.getProducts().subscribe({
      next: (response) => {
        this.productList = response.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.getCategory()
  }

  categoryList: any[] = [];
  getCategory() {
    this._product.getCategories().subscribe({
      next: (response) => {
        this.categoryList = response.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  anotherOne: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
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

isStored:{[Id:string]:boolean} = {};

wishListToggle(Id:string){
this.isStored[Id] = !this.isStored[Id]   
localStorage.setItem('wishList',JSON.stringify(this.isStored))
if(!this.isStored[Id]){
 this.deleteMywishListItem(Id)

}

}
  addToMyWishList(Id: string) {
    this._wish.addToWishList(Id).subscribe({
      next: (response) => {
        this._wish.wishNumber.next(response.count);
        this.wishListToggle(Id)
        this.toastr.success(response.message)
        
      },
      error: (err) => {
        console.log(err);
      }

    })
  }


  deleteMywishListItem(id:string){
    this._wish.deletMyWishList(id).subscribe({
      next:(response)=>{
        this.wishItem = response.data
        this._wish.wishNumber.next(response.count)
        
        
      },
      error:(err)=>{console.log(err);
      }
    })
  }





}
