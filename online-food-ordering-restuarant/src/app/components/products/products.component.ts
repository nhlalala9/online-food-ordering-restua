import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  apiUrl = 'http://localhost:1337';
  searchTerm: string = '';
  // products: any[];
  filteredProducts: any[] = [];
 
  constructor(
    private http: HttpClient,
    private ProductsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.ProductsService.getProducts().subscribe((products: any) => {
      this.products = products.data;
      this.filteredProducts = products.data;
      // console.log(products.data, "all");
      // console.log(this.filteredProducts, "filtered");
    });
  }

  search() {
    // use Array.filter() to filter the products based on the search term
    this.filteredProducts = this.products.filter((product:any) =>
      product.attributes.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );}

  deleteProducts(id: number) {
    if (confirm('Do you really want to delete this product')) {
      this.ProductsService.deleteProductById(id).subscribe(
        (data) => {
          console.log(data);
          this.loadProducts();
        },
        (error) => console.log(error)
      );
    }
  }


 
}
