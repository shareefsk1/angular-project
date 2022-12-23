import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {

  public employeeForm:FormGroup = new FormGroup({
    name: new FormControl(null , [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    mobile: new FormControl( null, [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    DoB: new FormControl(),

    // Nested Form
    Adderess: new FormGroup({
      addressLine:new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      city:new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      state:new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      pincode:new FormControl( null, [Validators.required, Validators.min(100000), Validators.max(999999)]),

      // Double Nested Form
      Location: new FormGroup({
        nearby: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        landmark: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
      }),
    }),
        // FormArray
        Education : new FormArray([]),

        // Dynamic Form
        type : new FormControl(),
        html : new FormControl(),
        css: new FormControl(),
        javascript: new FormControl(),
        angular: new FormControl(),
        node: new FormControl(),
        express: new FormControl(),
        mongo: new FormControl(),
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

  delete(i:number){
    this.employeeEducation.removeAt(i)
  }

}
