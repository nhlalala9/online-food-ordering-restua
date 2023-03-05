import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/products?populate=*`);
  }
  createProducts(product: any): Observable<any> {
    console.log(product);
    return this.http.post(`${this.apiUrl}/api/products`, product)
 
    ;
  }
  getById(id: any): Observable<any> {
    const url = `${this.apiUrl}/api/products/${id}?populate=*`;
    return this.http.get<any>(url);
  }



  updateProducts(product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/products/${product.id}`, {data:product});
  }

  // updateProducts(id: string, product: any): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const url = `${this.apiUrl}/api/products/${id}`;
  //   return this.http.put(url, JSON.stringify(product), { headers });
  // }
  

  deleteProductById(id: number): Observable<any> {
    const url = `${this.apiUrl}/api/products/${id}`;
    return this.http.delete(url);
  }

  // deleteProducts(productId: number): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/api/products/${productId}`);
  // }


}
