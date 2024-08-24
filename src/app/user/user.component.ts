import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  
  users: any[] = []; // Array to hold user data
  id: number=0;
  constructor(private router: Router,public service:DataService) {}
  ngOnInit(): void {
    if(!this.service.isedituser){
    this.id = this.service.idgenerator+1;
    this.service.idgenerator=this.id;  
    }
    else
    {
      this.id = this.service.user.id;
       (document.getElementById('firstName') as HTMLInputElement).value=this.service.user.firstName;
    (document.getElementById('lastName') as HTMLInputElement).value=this.service.user.lastName;
     (document.getElementById('dateCreated') as HTMLInputElement).value=this.service.user.dateCreated;
     (document.getElementById('role') as HTMLSelectElement).value=this.service.user.role;
    }
  }

  // Method to handle form submission
  onSubmit() {
    // Access the form elements directly
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const dateCreated = (document.getElementById('dateCreated') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLSelectElement).value;
    const status = this.getStatus(); // Get the selected status

  if(!this.service.isedituser){
    // Create a new user object from form values
    const newUser = {
      id: this.id,
      profilePicture: 'assets/images/default-profile.png', // Default profile picture
      firstName,
      lastName,
      dateCreated,
      role,
      status
    };
  this.service.users.push(newUser);
  }
  else{
    let updatedusers:any=[];
    
    this.service.users.forEach((user:any)=>{
      if (user.id===this.id){
        
        const newUser = {
          id: this.id,
          profilePicture: user.profilePicture, // Default profile picture
          firstName,
          lastName,
          dateCreated,
          role,
          status
        };
        updatedusers.push(newUser);
      }
      else{
        updatedusers.push(user);
      }
    })
    this.service.users=updatedusers;
  }
   
    // Add the new user to the users array
    // this.users.push(newUser);

    // Pass the users array to the dashboard component
    const navigationExtras: NavigationExtras = {
      state: {
        users: this.users
      }
    };

    // Navigate to the dashboard with the users data
    this.router.navigate(['/dashboard'], navigationExtras);
  }

  // Method to get the selected status from the form
  getStatus(): string {
    const statusElements = document.querySelectorAll('input[name="status"]:checked');
    return statusElements.length > 0 ? (statusElements[0] as HTMLInputElement).value : '';
  }
}

