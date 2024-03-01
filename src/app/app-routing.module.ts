import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { SigninComponent } from './auth-component/signin/signin.component';
import { SignupComponent } from './auth-component/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailsComponent } from './components/productDetails/productDetails.component';
import { authGuard } from './auth.guard';
import { ForgotPasswordComponent } from './auth-component/forgotPassword/forgotPassword.component';
import { ResetpasswordComponent } from './auth-component/resetpassword/resetpassword.component';
import { CheckoutpaymentComponent } from './components/checkoutpayment/checkoutpayment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';



const routes: Routes = [
  {path:'home',canActivate:[authGuard], component:HomeComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'allorders',component:AllordersComponent},
  {path:'checkoutpayment',canActivate:[authGuard],component:CheckoutpaymentComponent},
  {path:'brands' ,canActivate:[authGuard],component:BrandComponent},
  {path:'product',canActivate:[authGuard],component:ProductComponent},
  {path:'productDetails/:Id',canActivate:[authGuard],component:ProductDetailsComponent},
  {path:'category',canActivate:[authGuard],component:CategoryComponent},
  {path:'mycart',canActivate:[authGuard],component:MycartComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',canActivate:[authGuard],component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
