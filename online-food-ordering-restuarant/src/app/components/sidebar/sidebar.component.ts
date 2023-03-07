import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  products: any;
  apiUrl = 'http://localhost:1337';
  searchTerm: string = '';
  filteredProducts: any[] = [];


  constructor(     private http: HttpClient,
    private ProductsService: ProductsService,
    private router: Router) { }


    ngOnInit(): void {
      this.loadProducts();
      this.search()
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
    this.filteredProducts = this.products.filter((product:any) =>
      product.attributes.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
