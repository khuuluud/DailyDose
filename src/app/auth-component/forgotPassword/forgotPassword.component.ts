import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _auth: AuthService, private _Router: Router) { }
  msgSuccess: any;
  msgSu: any;
  msgError: any;
  msgErr: any;
  ngOnInit() {
  }

  forgotPassword = new FormGroup({

    email: new FormControl()
  })

  sendCode(group: FormGroup): void {
    this._auth.forgotPassword(group.value).subscribe({
      next: (response) => {
        this.msgSuccess = response.message
        // if(this.msgSuccess == 'Success' || this.msgError == 'error'){
        //   this.msgError = '';

        // }
        document.querySelector('.forgotPassword')?.classList.add('d-none');
        document.querySelector('.resetCode')?.classList.remove('d-none');
      },
      error: (err) => {
        this.msgError = err.error.message;

      }

    })

  }

  verifyCode = new FormGroup({
    resetCode: new FormControl()
  })


  verifyResetCode(form: FormGroup): void {
    this._auth.verifyCode(form.value).subscribe({
      next: (response) => {
        this.msgSu = response.status
        if (response.status == 'Success') {
          this._Router.navigate(['/resetpassword'])
          
          
        }
      },
      error: (err) => {
        this.msgErr = err.error.message;
        console.log(err);
      }
    })
  }

  visible:boolean = true;
  changetype:boolean = true;

  viewPass(){
   this.visible = !this.visible
   this.changetype = !this.changetype
  }

}
