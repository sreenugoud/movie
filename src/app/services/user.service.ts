 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/entity/User';
 @Injectable({
  providedIn: 'root'
})
 export class UserService{
  private empApiUrl = 'http://localhost:8082/Movie/user';

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
   };
  constructor(private http: HttpClient) {}

  getAllUser(): Observable<any> {
    return this.http.get(`${this.empApiUrl}/listallusers`);
  }
  // getEmployees(page: number) {
  //   return this.http.get(`${this.empApiUrl}?_page=${page}`);
  // }
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.empApiUrl}/finduser/${id}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.empApiUrl}/addUser`, user,this.httpOptions);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.empApiUrl}/updateuser`, user,this.httpOptions);
  }

  deleteuser(id: number): Observable<any> {
    return this.http.delete(`${this.empApiUrl}/deleteuser/${id}`);
  }

  getUserByName(username: string): Observable<any> {
    return this.http.get<User>(`${this.empApiUrl}/finduserbyname/${username}`);
  }


  checkexistence(username:any,pwd:any,role:any){
    return this.http.get<User>(`${this.empApiUrl}/login/${username}/${pwd}/${role}`);

  }
}
