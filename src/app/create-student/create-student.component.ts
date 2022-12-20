import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {

    public studentForm : FormGroup = new FormGroup(
      {
        name: new FormControl(),
        phone: new FormControl(),
        email: new FormControl(),
        // Nested Form
        address: new FormGroup({
          city:new FormControl(),
          state:new FormControl(),
          pin:new FormControl(),
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
            number: new FormControl(),
            expiry:new FormControl(),
            cvv:new FormControl()
          }
        )
      )
    }
    //  Deleteing Form From FormArray
    delete(i:number) {
      this.cardsFormArray.removeAt(i);
    }
}
