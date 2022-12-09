import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  public name:string = "shareef" ;

  public age:number = 20;

  public IsIndian:boolean = true ;

  public PhoneNumber:number = 0;

  test() {
    alert("submitted")
  }

  test2(){
    alert("double click")
  }

  test3(){
    alert("key pressed")
  }

  test4(){
    alert("mouse entered")
  }

  test5(){
    alert("mouse leave")
  }


}
