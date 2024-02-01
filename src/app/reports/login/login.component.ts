// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Implement your authentication logic here
    if (this.username === 'your_username' && this.password === 'your_password') {
      console.log('Login successful');
      // Redirect to another page or perform other actions
    } else {
      console.log('Login failed');
      // Display error message or perform other actions
    }
  }
}
