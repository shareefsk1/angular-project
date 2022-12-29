import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _sbiBankService:SbibankService , private _Router:Router){
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

deleteAccount(id:string){
  this._sbiBankService.deleteAccount(id).subscribe(
    (data:any) => {
      alert('Deleted successfully') ;
      location.reload() ;
    },
    (err:any) => {
      alert('internal server error') ;
    }
  )
}

view(id:any){
  this._Router.navigateByUrl('/dashboard/bank-details/' + id)
}

edit(id:any){
  this._Router.navigateByUrl('/dashboard/edit-bank/' + id)
}

}
