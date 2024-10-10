import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

   

  userEmail: string | null = '';
  userRole: string | null = '';
  Users: any[] = []; // To hold all users
  movies : any[] =[];//hold all movies
  currentUser : any ={} // To hold current user's data
  isAdmin: boolean = false;
  isCurrentUser: boolean = false;

  constructor(
    private userService: UserService,
    private movieService: MovieService,
    private router:Router
     
  ) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userEmail = user.name || null; // Assuming user object has an email property
    this.userRole = user.role || null; // Assuming user object has a role property

    // Determine if the user is admin or the current user
    this.isAdmin = this.userRole === 'Admin';
    console.log(this.isAdmin);
    
    this.isCurrentUser = this.userRole === 'Customer';
  }
  ngOnInit() {
    this.movieService.getAllMovies().subscribe((data) => {
      this.movies = data; // Store the list of all movies
      });
    // Fetch all employees if admin
    // if (this.isAdmin) {
    //   this.userService.getAllUser().subscribe((data) => {
    //   this.movies= data; // Store the list of all employees
    //   });
    // } else
    //  if (this.isCurrentUser) {
      // Fetch current employee details
      const currentUserId = JSON.parse(
        localStorage.getItem('user') || '{}'
      ).userId; // Assuming uid is stored

      // console.log(currentUserId);
       
      this.userService.getUserById(currentUserId).subscribe((data: any) => {
        this.currentUser = data; // Store the current employee's data
      });
   // }
  }


  // selectID: any=0;
  // onDelete(employee: Employee) {
  //   this.selectID= employee.eid;
   
  //    this.employeeService.deleteEmployee(this.selectID).subscribe({
  //     next:(response)=>{
  //       console.log("Employee deleted..",response);
  //       this.router.navigate(['/dashboard'])
  //     },
  //     error: (error)=>{
  //       console.error("error deleting employee...",error)
  //     },
  //   } )
  // }

 

}
