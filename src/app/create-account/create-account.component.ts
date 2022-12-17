import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SbibankService } from '../sbibank.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  

    public accountForm: FormGroup = new FormGroup(
      {
      account_name: new FormControl(),
      account_number:new FormControl(),
      currency:new FormControl(),
      user_image:new FormControl(),
      available_balance:new FormControl(),

      }
    )

    constructor(private _sbibankService:SbibankService) {

    }

    createAccount(){
      this._sbibankService.createAccountData(this.accountForm.value).subscribe(
        (data:any) => {
          alert('Account Created');
          location.reload()
        },
        (err:any) => {
          alert('server not found')
        }
      )
    }

}
