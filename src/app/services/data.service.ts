import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  idgenerator: number=10;
  isedituser: boolean=false;
  user: any=undefined;
  users: any = [
    { 
      id: 1,
      firstName: '1 Michal', 
      lastName: 'Holz', 
      dateCreated: '2023-04-10', 
      role: 'Admin', 
      status: 'Active',
      profilePicture: 'assets/Michal Holz.png' 
      
    },
    { 
      id: 2,
      firstName: '2 Paula', 
      lastName: 'Wilson', 
      dateCreated: '2014-05-08', 
      role: 'Publisher', 
      status: 'Active',
      profilePicture: 'assets/Paula wilson.png' 
    },
    { 
      id: 3,
      firstName: '3 Antonio', 
      lastName: 'Moreno', 
      dateCreated: '2015-11-05', 
      role: 'Publisher', 
      status: 'Suspended',
      profilePicture: 'assets/Antonio Moreno.png' 
    },
    { 
      id: 4,
      firstName: '4 Mary', 
      lastName: 'Saveley', 
      dateCreated: '2016-06-09', 
      role: 'Reviewer', 
      status: 'Active',
      profilePicture: 'assets/Mary Saveley.png' 
    },
    { 
      id: 5,
      firstName: '5 Martin', 
      lastName: 'Sommer', 
      dateCreated: '2017-12-08', 
      role: 'Moderator', 
      status: 'Inactive',
      profilePicture: 'assets/Martin Sommer.png' 
    }
  ];
  constructor() { }
}
