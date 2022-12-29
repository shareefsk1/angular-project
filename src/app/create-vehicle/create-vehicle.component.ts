import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent {

  public isEdit: boolean = false ;
  public id : string = ''

  public vehicleForm: FormGroup = new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      color: new FormControl(),
      image: new FormControl()
    }
  )

  constructor(private _vehicleService: VehicleService , private _activeRouter:ActivatedRoute){
    _activeRouter.params.subscribe(
      (data:any) => {

        if(data.id){
          this.isEdit = true ;
          this.id = data.id ;
        }

        _vehicleService.getVehicle(data.id).subscribe(
          (data2:any) => {
            // To attach the data to the form
            this.vehicleForm.patchValue(data2)
          }
        )
      }
    )
  }

  submit(){
    console.log(this.vehicleForm.value);


    if(this.isEdit) {
      this._vehicleService.updateVehicle(this.vehicleForm.value, this.id).subscribe(
        (data:any)=>{
          alert("updated Succesfully");
        },
        (err:any)=>{
          alert("Not Updated");
        }
      );
    }
    else{
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Created Succesfully");
      },
      (err:any)=>{
        alert("Internal server error");
      }
    );
    }
  }

}
