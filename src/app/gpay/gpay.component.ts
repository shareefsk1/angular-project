import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.scss']
})
export class GpayComponent {
    public amount : number = 0 ;

    constructor(private _bankService:BankService){

    }

    withdraw(){
        this._bankService.withdraw(this.amount)
    }

    deposite(){
        this._bankService.deposite(this.amount)
    }

    showbalance(){
      alert(this._bankService.getbalance())
    }
}
