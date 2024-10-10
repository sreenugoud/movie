import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private empApiUrl = 'http://localhost:8082/Movie/ticket';

  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
   }),
  };
 constructor(private http: HttpClient) {}
addTicket(ticket: any) {
  return this.http.post(`${this.empApiUrl}/addticket`, ticket, this.httpOptions);
}

findTicket(tid: number) {
  return this.http.get(`${this.empApiUrl}/findticket/${tid}`, this.httpOptions);
}

deleteTicket(tid: number) {
  return this.http.delete(`${this.empApiUrl}/deleteticket/${tid}`, this.httpOptions);
}

listAllTickets() {
  return this.http.get(`${this.empApiUrl}/listalltickets`, this.httpOptions);
}
}
