import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SbibankService } from '../sbibank.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {


    public isEdit :boolean = false ;
    public id: string = '' ;


    public accountForm: FormGroup = new FormGroup(
      {
      account_name: new FormControl(),
      account_number:new FormControl(),
      currency:new FormControl(),
      user_image:new FormControl(),
      available_balance:new FormControl(),
      createdAt:new FormControl()

      }
    )


    constructor(private _sbibankService:SbibankService, private _activatedRouter:ActivatedRoute, private _router:Router) {
          _activatedRouter.params.subscribe(
            (data:any) => {

              if(data.id) {
                this.isEdit = true ;
                this.id = data.id ;
              }

              _sbibankService.accountDetails(data.id).subscribe(

                (data2:any) => {
                  console.log(data2)
                  this.accountForm.patchValue(data2);
                }

              )
            }
          )
    }

    createAccount(){

      if(this.isEdit){
        this._sbibankService.update(this.accountForm.value , this.id).subscribe(
          
            (data:any)=>{
              alert("updated Succesfully");
              this._router.navigateByUrl('/dashboard/sbibank')
            },
            (err:any)=>{
              alert("Not Updated");
            }
          
        )
      }

      else{
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

}
