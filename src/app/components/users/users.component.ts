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
  enableAdd = true;

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
        },
        image: 'http://lorempixel.com/600/600/people/2'
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
        },
        image: 'http://lorempixel.com/600/600/people/3'
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
        },
        image: 'http://lorempixel.com/600/600/people/1'
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
        },
        image: 'http://lorempixel.com/600/600/people/4'
      },
      {
        firstName: 'Benta',
        middleInit: 'A',
        lastName: 'Okello',
        image: 'http://lorempixel.com/600/600/people/5'
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
