import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Support } from '../models/support';

@Component({
  selector: 'app-admin-support',
  templateUrl: './admin-support.component.html',
  styleUrls: ['./admin-support.component.css'],
})
export class AdminSupportComponent {
  support: Support;
  supportForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  constructor() {
    this.support = {} as Support;
  }

  ngOnInit() {
    this.supportForm = new FormGroup({
      fullname: new FormControl(this.support.fullname, [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl(this.support.email, [
        Validators.required,
        Validators.email,
      ]),
      description: new FormControl(this.support.description, [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(200),
      ]),
    });
  }
  get f(){
    return this.supportForm.controls;
  }
  validate() {
    if( this.supportForm.invalid ){
      for( const control of Object.keys(this.supportForm.controls)){
        this.supportForm.controls[control].markAsTouched()
      }
      return false
    }
    return true;
  }
  supportSubmit(){
    if(this.validate()){
      console.log('Admin Support Form Submitted', this.support)
    }
  }

}
