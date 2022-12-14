import { Component } from '@angular/core';
import { BoredomService } from '../boredom.service';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.component.html',
  styleUrls: ['./boredom.component.scss']
})
export class BoredomComponent {


  public activities : any = {} ;

    constructor(private _boredom:BoredomService){

    }

    function(){
      this._boredom.getData().subscribe(
        (data:any) => {
          this.activities = data ;
        },
        (err:any) => {
          alert('server not found')
        }
      )
    }
}
