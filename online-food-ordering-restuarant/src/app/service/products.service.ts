import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  // getItems() {
  //   return this.http.get('http://localhost:1337/my-content-type');
  // }

  
  // createItem(item) {
  //   return this.http.post('http://localhost:1337/my-content-type', item);
  // }

  // updateItem(id, item) {
  //   return this.http.put(`http://localhost:1337/my-content-type/${id}`, item);
  // }

  // deleteItem(id) {
  //   return this.http.delete(`http://localhost:1337/my-content-type/${id}`);
  // }
  
}
