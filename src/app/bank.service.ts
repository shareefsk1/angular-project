import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

public balance: number = 1000 ;


  constructor() { }

withdraw(amount:number){
  this.balance = this.balance - amount ;
  
}

deposite(amount:number){
  this.balance = this.balance + amount ;
}

getbalance(){
  return (this.balance) ;
}



}
