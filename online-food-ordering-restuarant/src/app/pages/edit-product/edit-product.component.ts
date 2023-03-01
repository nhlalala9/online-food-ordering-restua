
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(),
    description: new FormControl(''),
    
  })

  product: any;

  serve = {};
  public errorMessage : string | null = null;

  submitted = false;


  constructor(private route: ActivatedRoute, private productsService: ProductsService,private fbuilder: FormBuilder, private reactiveformsmodule: ReactiveFormsModule, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productsService.getById(id).subscribe(
      response => {
        this.product = response.data;
        console.log(this.product)
      },
      error => {
        console.log(error);
      }
    );


  }




  onSubmit() {

    this.serve = {
      data:{
      name: this.form.value.name,
      price: this.form.value.price,
      description: this.form.value.description,
      picture: this.form.value.picture,
      }
    };
    console.log(this.serve),"why";

    this.productsService.updateProducts(this.product).subscribe(() => {
      this.router.navigate(['restuarant/products']);
    });

}}
