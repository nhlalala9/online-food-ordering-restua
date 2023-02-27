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
    this.getAllMyModels();
  }
  getAllMyModels(): void {
    this.ProductService.getAll()
      .subscribe(models => {
        this.myModels = models;
      });
  }

  getOneMyModel(id: number): void {
    this.ProductService.getOne(id)
      .subscribe(model => {
        this.currentModel = model;
      });
  }

  createMyModel(data: any): void {
    this.ProductService.create(data)
      .subscribe(() => {
        this.isCreating = false;
        this.getAllMyModels();
      });
  }

  updateMyModel(id: number, data: any): void {
    this.ProductService.update(id, data)
      .subscribe(() => {
        this.isUpdating = false;
        this.currentModel = {};
        this.getAllMyModels();
      });
  }

  deleteMyModel(id: number): void {
    this.ProductService.delete(id)
      .subscribe(() => {
        this.getAllMyModels();
      });
  }

  toggleCreate(): void {
    this.isCreating = !this.isCreating;
  }

  toggleUpdate(id: number): void {
    this.isUpdating = !this.isUpdating;
    if (id) {
      this.getOneMyModel(id);
    }
  }

}
