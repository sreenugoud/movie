import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( private router: Router,private authService:AuthService ) {}

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
  signOut(): void {
   this.authService.logout(); // Clear local storage
    this.router.navigate(['/login']); // Redirect to login page
  }
}
