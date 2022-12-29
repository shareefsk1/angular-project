import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';
import { SbibankService } from '../sbibank.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent {

  public account: any = []

  constructor(private _activatedRouter:ActivatedRoute ,private _sbibankService:SbibankService){
      _activatedRouter.params.subscribe(
        (data:any) => {

          _sbibankService.accountDetails(data.id).subscribe(
            (data2:any) => {
              this.account = data2
            }
          )
        }
      )
  }

}
