import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

  public vehicles: any = []


  constructor(private _vehicleService:VehicleService){
      this._vehicleService.getVehicles().subscribe(
        (data:any) => {
          this.vehicles = data ;
        } ,

        (err:any)=> {
          alert("internal server error") ;
        }
      )
     
  }
  public term:string = "";

  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  public column:string = "";
  public order:string = "";
  sort(){
    this._vehicleService.getSortedVehicles(this.column, this.order)
    .subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  page(page:number){
    this._vehicleService.getPagedVehicles(page).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
      
}
