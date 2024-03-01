
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') !== null) {
      this.saveUserData();
    }

  }

  userdata = new BehaviorSubject<any>(null);
  userId:any = new BehaviorSubject <any>(null);

  saveUserData() {
    let encodedToken: any = localStorage.getItem('userToken');
    let decodedToken:any = jwtDecode(encodedToken);
    this.userdata.next(decodedToken);
    this.userId.next(decodedToken.id);
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.userdata.next(null);
    this._Router.navigate(['/signin']);

  }



  register(formData: any): Observable<any> {

    return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, formData)

  }
  login(formData: any): Observable<any> {

    return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formData)

  }

  forgotPassword(formData:any): Observable<any> {

    return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, formData)

  }
  
  verifyCode(formData:any): Observable<any> {

    return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, formData)

  }
  resetPassword(formData:any): Observable<any> {

    return this._http.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`, formData)

  }



}
