import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  apiUrl = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/bookings`);
  }
}
