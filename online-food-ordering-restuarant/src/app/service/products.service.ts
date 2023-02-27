import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/my-models`);
  }

  getOne(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/my-models/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/my-models`, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/my-models/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/my-models/${id}`);
  }
}
