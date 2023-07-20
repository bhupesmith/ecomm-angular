import { Component } from '@angular/core';
import { Support } from '../models/support';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent {
  support: Support;

  constructor(){
    this.support = {} as Support;
  }

  validate(){
    
    console.log('Customer support form', this.support)
  }

}
