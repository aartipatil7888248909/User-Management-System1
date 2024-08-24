import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
  constructor(private router: Router) { }

  login() {
    // Add your authentication logic here
    // On successful login, navigate to the dashboard
    this.router.navigate(['/dashboard']);
  }
}

