import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



      public loginForm : FormGroup = new FormGroup({
        email : new FormControl(),
        password:new FormControl()

      })

      constructor(private _loginService:LoginServiceService, private _routing:Router){}

      submit(){
        console.log(this.loginForm)
        this._loginService.login(this.loginForm.value).subscribe(
          (data) => {
           sessionStorage.setItem('my-app-token',data.token)
            this._routing.navigateByUrl("/dashboard")
          },
          (err:any) => {
            alert('Incorrect Details')
          }
        )
        
      }
}
