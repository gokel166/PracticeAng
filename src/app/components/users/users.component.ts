import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    middleInit: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: '',
      zip: null
    }
  };
  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = false;
  showUserForm: boolean = false;

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
        isActive: false,
        registered: new Date('2/14/2013 08:26:21'),
        hide: false
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
          zip: 63043,
        },
        isActive: true,
        registered: new Date('5/4/2012 02:11:21'),
        hide: true
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
          zip: 63043,
        },
        isActive: false,
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
        isActive: true
      },
      {
        firstName: 'Benta',
        middleInit: 'A',
        lastName: 'Okello',
        age: 50,
        address: {
          street: '1910 Mereview Court',
          city: 'Charlotte',
          state: 'NC',
          zip: 28210
        },
        isActive: true
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

  toggleHide(user: User) {
    user.hide = !user.hide;
    console.log('user toggled');
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      middleInit: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: '',
        zip: null
      }
    };
  }

  onSubmit(e) {
    console.log('Submitted');

    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }

}
