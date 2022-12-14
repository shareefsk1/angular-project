import { Component } from '@angular/core';
import { SbibankService } from '../sbibank.service';

@Component({
  selector: 'app-sbibank',
  templateUrl: './sbibank.component.html',
  styleUrls: ['./sbibank.component.scss']
})
export class SbibankComponent {

  public accounts : any = []
  public keys : any = []

  constructor(private _sbiBankService:SbibankService){
      this._sbiBankService.getdata().subscribe(
        (data:any) => {
            this.accounts = data ;
            this.keys = Object.keys(data[0])
        },
        (err:any) => {
          alert('server not found')
        }
      )
  }

}
