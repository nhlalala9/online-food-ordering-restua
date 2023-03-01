import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  product: any;
  isLoading = false;

  constructor(private http:HttpClient, private ProductsService:ProductsService ) { }

  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe((products: any) =>{
      this.isLoading = true;
      this.product = products.data;
      console.log(products.data)
      this.isLoading = false;
    })
    
  }

}
