import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'George',
        lastName: 'Okello',
        age: 27,
        address: {
          street: '2020 McCausland Ave',
          city: 'St. Louis',
          state: 'MO',
          zip: 63143
        }
      },
      {
        firstName: 'Arthur',
        lastName: 'Okello',
        age: 24,
        address: {
          street: '1326 McKelvey Road',
          city: 'Maryland Heights',
          state: 'MO',
          zip: 63043
        }
      },
      {
        firstName: 'Nigel',
        lastName: 'Okello',
        age: 19,
        address: {
          street: '1326 McKelvey Road',
          city: 'Maryland Heights',
          state: 'MO',
          zip: 63043
        }
      },
      {
        firstName: 'Chris',
        lastName: 'Okello',
        age: 24,
        address: {
          street: '1326 McKelvey Road',
          city: 'Maryland Heights',
          state: 'MO',
          zip: 63043
        }
      }
    ];
  }

}
