import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent {

   @Input() public a :number = 0 ;

   @Output() bEvent:EventEmitter<any> = new EventEmitter() ;

   send(){
    this.bEvent.emit(20) ;
   }

}
