import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  myModels: any[] = [];
  currentModel: any = {};
  isCreating = false;
  isUpdating = false;


  constructor(private ProductService: ProductsService) { }

  ngOnInit(): void {
    
  }


}
