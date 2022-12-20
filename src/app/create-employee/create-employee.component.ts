import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {

  public employeeForm:FormGroup = new FormGroup({
    name: new FormControl(),
    mobile: new FormControl(),
    email: new FormControl(),
    DoB: new FormControl(),

    // Nested Form
    Adderess: new FormGroup({
      addressLine:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl(),

      // Double Nested Form
      Location: new FormGroup({
        nearby: new FormControl(),
        landmark: new FormControl()
      }),
    }),
        // FormArray
        Education : new FormArray([])
  })


  get employeeEducation(){
    return this.employeeForm.get('Education') as FormArray ;
  }


  add(){
    this.employeeEducation.push(
    new FormGroup ({
      qualification:new FormControl(),
      year: new FormControl(),
      percentage: new FormControl()
        })
  )
  }

  submit(){
    console.log(this.employeeForm)
  }

}
