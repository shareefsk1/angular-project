import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss']
})
export class RectangleComponent {
      public length : number = 0;
      public breadth : number = 0;

      public result : number = 0
      public are : string = ""


      area(){
        this.result = this.length + this.breadth
        this.are = "Area is: "
      }

      perimeter() {
        this.result = 2*(this.length+this.breadth)
        this.are = "Perimeter is: "
      }

}
