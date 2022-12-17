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
  public filter: any = ''
  public order: any = ""
  public value: any = ""

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

  filterButton(){
      this._sbiBankService.getFilteredData(this.filter).subscribe(
        (data:any) => {
          this.accounts = data ;
        },
        (err:any) => {
          alert('internal server error')
        }
      )
  }

  sortby(){
      this._sbiBankService.getSortedData(this.order,this.value).subscribe(
        (data:any) => {
          this.accounts = data ;
        },
        (err:any) => {
          alert('internal server error')
        }
      )
  }

}
