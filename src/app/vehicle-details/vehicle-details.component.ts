import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent {

  public vehicle : any = {} ; 

  constructor(private _activeRoute:ActivatedRoute, private _vehicleService:VehicleService) {
    _activeRoute.params.subscribe(
      (data:any) => {
        
        _vehicleService.getVehicle(data.id).subscribe(
          (data2:any) => {
            this.vehicle = data2
          }
        )
      }
    )
  }



}
