import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './shared component/navbar/navbar.component';
import { CategoryComponent } from './components/category/category.component';
import { BrandComponent } from './components/brand/brand.component';
import { ProductComponent } from './components/product/product.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './auth-component/signin/signin.component';
import { SignupComponent } from './auth-component/signup/signup.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './auth-component/forgotPassword/forgotPassword.component';
import { ResetpasswordComponent } from './auth-component/resetpassword/resetpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutpaymentComponent } from './components/checkoutpayment/checkoutpayment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { SalePipe } from './sale.pipe';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NotfoundComponent,
    NavbarComponent,
    CategoryComponent,
    BrandComponent,
    ProductComponent,
    MycartComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent,
    WishlistComponent,
    ForgotPasswordComponent,
    ResetpasswordComponent,
    CheckoutpaymentComponent,
    AllordersComponent,
    SalePipe,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
