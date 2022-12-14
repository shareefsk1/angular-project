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
      this._vehicleService.getVehicle().subscribe(
        (data:any) => {
          this.vehicles = data ;
        } ,

        (err:any)=> {
          alert("internal server error") ;
        }
      )
     
  }
      
}
