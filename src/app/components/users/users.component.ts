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
  currentClasses = {};
  currentStyles = {};

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
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false,
        balance: 120,
        registered: new Date('2/23/2018 1:54:23')
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
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        balance: 430,
        registered: new Date('12/13/2016 05:25:00')
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
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: false,
        balance: 213,
        registered: new Date('10/25/2017 12:07:20')
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
        image: 'http://lorempixel.com/600/600/people/4',
        isActive: true
      },
      {
        firstName: 'Benta',
        middleInit: 'A',
        lastName: 'Okello',
        image: 'http://lorempixel.com/600/600/people/5',
        isActive: false
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
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px'
    }
  }

}
