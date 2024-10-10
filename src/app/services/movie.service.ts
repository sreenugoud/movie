import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private empApiUrl = 'http://localhost:8082/Movie/movie';

  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
   }),
  };
 constructor(private http: HttpClient) {}

 getAllMovies(): Observable<any> {
   return this.http.get(`${this.empApiUrl}/listallmovies`);
 }
//  getEmployees(page: number) {
//    return this.http.get(`${this.empApiUrl}?_page=${page}`);
//  }
 getMovieById(id: number): Observable<any> {
   return this.http.get(`${this.empApiUrl}/findmovie/${id}`);
 }

 createMovie(movie: any): Observable<any> {
   return this.http.post(`${this.empApiUrl}/addmovie`, movie,this.httpOptions);
 }

 updateMovie(movie: any): Observable<any> {
   return this.http.put(`${this.empApiUrl}/updatemovie`, movie,this.httpOptions);
 }

 deleteMovie(id: number): Observable<any> {
   return this.http.delete(`${this.empApiUrl}/deletemovie/${id}`);
 }

//  getNextEmployeeId(): Observable<Number> {
//    return this.http.get<Number>(`${this.empApiUrl}/next-eid`);
//  }
   
}
