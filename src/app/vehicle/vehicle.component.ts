import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

  

  
  public vehicles:Vehicle[] = []


  constructor(private _vehicleService:VehicleService ,  private _router:Router){
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

  view(id:string){
        this._router.navigateByUrl('/dashboard/vehicle-details/' + id)
  }

  edit(id:string){
    this._router.navigateByUrl('/dashboard/edit-vehicle/' + id)
}

  
      
}
