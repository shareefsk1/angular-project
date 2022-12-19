import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

      constructor(private _loginService:LoginServiceService){}

      submit(){
        console.log(this.loginForm)
        this._loginService.login(this.loginForm.value).subscribe(
          (data) => {
            alert('login Successful')
          },
          (err:any) => {
            alert('Incorrect Details')
          }
        )
        
      }
}
