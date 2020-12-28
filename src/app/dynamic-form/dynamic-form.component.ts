import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  dynamicForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
 
   }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
    formStatus: ['sent', Validators.required],
    uploadFile:['', Validators.required],
    sendDate:['', Validators.required],
    comment:['', Validators.required],
    passportNumber:['', null],
    urgent:['', null],
    deadline:['', null],

  },
  )
  

  this.dynamicForm.controls['formStatus'].valueChanges.subscribe(formStatus => {
    if (formStatus === 'sent') {
      this.formSentValidation();
    } else {
      this.formNotSentValidation()
    }
  });

  this.dynamicForm.controls['urgent'].valueChanges.subscribe(urgent => {
    if(urgent==='urgent'){
      this.dynamicForm.controls['deadline'].setValidators([Validators.required])
    }else{
      this.dynamicForm.controls['deadline'].setValidators(null)
    }
  });

  }

  
   formSentValidation(){
    this.dynamicForm.controls['uploadFile'].setValidators([Validators.required])
      this.dynamicForm.controls['sendDate'].setValidators([Validators.required])
      this.dynamicForm.controls['comment'].setValidators([Validators.required])
      this.dynamicForm.controls['passportNumber'].setValidators(null)
      this.dynamicForm.controls['urgent'].setValidators(null)
      this.dynamicForm.controls['deadline'].setValidators(null)
  }
  
   formNotSentValidation(){
    this.dynamicForm.controls['uploadFile'].setValidators(null)
      this.dynamicForm.controls['sendDate'].setValidators(null)
      this.dynamicForm.controls['comment'].setValidators(null)
      this.dynamicForm.controls['passportNumber'].setValidators([Validators.required])
      this.dynamicForm.controls['urgent'].setValidators([Validators.required])
      this.dynamicForm.controls['deadline'].setValidators(null)
  }

  onSubmit(){
    console.log("here")
    console.log(this.dynamicForm.valid,this.dynamicForm.value)
  }



}
