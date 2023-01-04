import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {

    public studentForm : FormGroup = new FormGroup(
      {                                 
        name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        phone: new FormControl(null, [Validators.required,Validators.min(100000000), Validators.max(9999999999)]),
        email: new FormControl(null, [Validators.required, Validators.email, emailDomain ]),
        // Nested Form
        address: new FormGroup({
          city:new FormControl(null, [Validators.required, Validators.minLength(2)]),
          state:new FormControl(),
          pin:new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)]),
        }),
        // Form Array
        cards:new FormArray([]),

        // Dyanamic Form
        type: new FormControl(),
        busfee: new FormControl(),
        hostelfee: new FormControl()

      }
    )

    submit(){
      console.log(this.studentForm)
    }

    // Getting Empty FormArray Assigning Variable
    get cardsFormArray(){
      return this.studentForm.get('cards') as FormArray;
    }

    // Adding FormGroup To Empty FormArray
    add(){
      this.cardsFormArray.push(
        new FormGroup(
          {
            number: new FormControl(null, [Validators.required, Validators.min(1000000000000000), Validators.max(9999999999999999)]),
            expiry:new FormControl(),
            cvv:new FormControl( null, [Validators.required, Validators.min(100),Validators.max(999)])
          }
        )
      )
    }
    //  Deleteing Form From FormArray
    delete(i:number) {
      this.cardsFormArray.removeAt(i);
    }

}

// custom validators

function emailDomain(control: AbstractControl): ValidationErrors | null
{
    if(control.value?.indexOf("@capgemini.com") != -1){
      return null ;
    }
    else{
      return {'emailDomain' : 'email should contain @capgemini.com'}
    }
}
