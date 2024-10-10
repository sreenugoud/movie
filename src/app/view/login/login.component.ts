import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/entity/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = '';
  password: string = '';
  role: string = 'Customer';
   email: string =""
   
  constructor(private authService: AuthService,private userService: UserService, private router: Router) {}

  onLogin() {
    const suser: User = {
      name: this.name,
      password: this.password,
      role: this.role,
      email: this.email
    };
    console.log(this.name);
    
    this.authService.login(suser).subscribe(
      (response: any) => {
        if (response) {
          // Store user data in local storage or session
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/dashboard']);
        } else {
          alert(
            'Login failed: ' + (response.message || 'Invalid credentials---')
          );
        }
      },
      (error) => {
        console.error('Login error', error);
        alert('Login error: ' + error.message);
      }
    );
  }
}
