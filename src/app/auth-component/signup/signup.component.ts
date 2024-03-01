import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {



constructor(private _auth:AuthService, private _Route:Router){}
error!:string;
isLoading:boolean = false;

registerForm:FormGroup = new FormGroup({
name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
email: new FormControl(null,[Validators.required,Validators.email]),
password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)]),
rePassword: new FormControl(null),
phone: new FormControl(null,[Validators.required,Validators.pattern(/^(002)?(01)[0125][0-9]{8}$/)])
},{validators:[this.confirmPassword]} as FormControlOptions)



confirmPassword(group:FormGroup):void{
let password = group.get('password');
let rePassword = group.get('rePassword');
if(rePassword?.value == ''){
  rePassword.setErrors({required:true});
}else if (password?.value !== rePassword?.value){
  rePassword?.setErrors({notMatch:true});
}

}

registerSubmit(form:FormGroup){
  this.isLoading = true;
if(this.registerForm.valid){
  this._auth.register(form.value).subscribe({
    next:(response)=>{
      if(response.message == "success"){
this._Route.navigate(['/signin'])
      }
      this.isLoading = false;
     },
    error:(err)=>{
      console.log(err);
this.error=err.error.message
this.isLoading = false;
    }
  })
}

}

visible:boolean = true;
changetype:boolean = true;

viewPass(){
 this.visible = !this.visible
 this.changetype = !this.changetype
}



}
