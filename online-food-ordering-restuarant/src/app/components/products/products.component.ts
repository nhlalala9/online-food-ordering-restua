import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  router: any;
  products: any;

  constructor(private http:HttpClient, private ProductsService:ProductsService ) { }

  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe((products: any[]) =>{
      this.products = products;
      console.log(products,"oiuy")
    })
    
  }

  deleteProducts(){
    if (confirm("Do you really want to delete this product")) {
      this.http
        .delete("http://localhost:1337api/products/")
        .subscribe((data) => {
          this.router.navigate(["/"]);
        });
    }
  }

}
function products(products: any) {
  throw new Error('Function not implemented.');
}

