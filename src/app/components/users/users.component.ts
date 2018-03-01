import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended = true;
  loaded = false;

  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstName: 'George',
        middleInit: 'W',
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
        middleInit: 'T',
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
        middleInit: 'C',
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
        middleInit: 'A',
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
        firstName: 'Benta',
        middleInit: 'A',
        lastName: 'Okello'
      }
    ];

    this.loaded = true;

    // this.addUser({
    //   firstName: 'Kenneth',
    //   middleInit: 'R',
    //   lastName: 'Okello',
    //   age: 63,
    //   address: {
    //     street: '1326 McKelvey Road',
    //     city: 'Maryland Heights',
    //     state: 'MO',
    //     zip: 63043
    //   }
    // });
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
