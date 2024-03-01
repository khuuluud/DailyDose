import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  error!: string;
  isLoading: boolean = false;

  
  
  

  constructor(private _auth: AuthService, private _Route: Router) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)]),
  })

  loginSubmit(form: FormGroup) {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this._auth.login(form.value).subscribe({
        next: (response) => {
          if (response.message == "success") {
            localStorage.setItem('userToken', response.token)
            this._auth.saveUserData();
            this._Route.navigate(['/home'])
          }
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.error = err.error.errors.msg
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
