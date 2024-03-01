import { Component, HostBinding, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isLogin: boolean = false;
  cartNumber!: number;
  wishNumber!: number;
  constructor(private _auth: AuthService, private _cart: CartService, private _wish: WishlistService) {




    _cart.cartNumber.subscribe({
      next: (response) => {
        this.cartNumber = response;
      }
    })
    _auth.userdata.subscribe({
      next: () => {
        if (_auth.userdata.getValue() !== null) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      }
    })

  }

  logOut() {
    this._auth.logOut();
  }

  ngOnInit(): void {
    this._wish.wishNumber.subscribe({
      next: (response: any) => {
        this.wishNumber = response;
        this._wish.addMyWishList()

      }
    })
  }

  @HostBinding('class.scrolled')
  isScrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


    const scrollThreshold = 100;

    this.isScrolled = scrollOffset >= scrollThreshold;
  }

}
