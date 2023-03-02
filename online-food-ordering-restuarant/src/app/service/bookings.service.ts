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

  updateItemStatus(itemId: number, status: string): Observable<any> {
    const url = `${this.apiUrl}/api/bookings?filters[id][$eq]=${itemId}`;
    // const payload = { status: newStatus };
    return this.http.put(url, {status});
  }
}
