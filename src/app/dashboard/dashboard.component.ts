import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DataService } from '../services/data.service';

interface User {
  firstName: string;
  lastName: string;
  dateCreated: string; // Use string to match the input type
  role: string;
  status: string;
  profilePicture: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  constructor(private router: Router,public service:DataService) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { users: User[] };
  console.log(this.service.users)
    //if (state && state.users) {
      //thiusers = state.users;
    //
  }

  addUser() {
    this.service.isedituser=false;
    this.router.navigate(['/user']);
  }

  removeUser(index: number) {
    this.service.users.splice(index, 1);
  }

  viewUpdateUser(user: any) {
    this.service.user=user;
    this.service.isedituser=true;
    this.router.navigate(['/user'], { queryParams: { ...user } });
  }
}
