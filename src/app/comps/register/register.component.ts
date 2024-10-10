import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/entity/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService:UserService, private router:Router){}
name :string =""
password: string=""
email: string=""
role: string ="Customer"
  user :[]=[];


register() {
  const suser: User = {
    name: this.name,
    password: this.password,
    role: this.role,
    email: this.email
  };
this.userService.createUser(suser).subscribe(
  (response: any) => {
    
      this.router.navigate(['/login']);
 
  },
  (error) => {
    console.log("khali");
    
    console.error('Login error', error);
    alert('Login error: ' + error.message);
  }
);
}
}
