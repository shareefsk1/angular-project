import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

public firstnumber:number = 0;
public secondnumber:number = 0;

public result: number = 0;

sum(){
  this.result = this.firstnumber + this.secondnumber;
}
sub(){
  this.result = this.firstnumber - this.secondnumber;
}

mul(){
  this.result = this.firstnumber * this.secondnumber;
}

div(){
  this.result = this.firstnumber / this.secondnumber;
}

}
