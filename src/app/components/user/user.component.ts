///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, Input } from '@angular/core';
import { User } from '../../models/User' ;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  // take inputs from "User" interface
  @Input('user') user: User;

  constructor() {
    this.user = {
      firstName: 'George',
      lastName: 'Okello',
      age: 27,
      address: {
        street: '1326 McKelvey Road',
        city: 'Maryland Heights',
        state: 'MO',
        zip: 63043
      }
    };
  }

}


