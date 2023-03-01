import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  form = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(),
    description: new FormControl(''),
    
  })


  serve = {};
  public errorMessage : string | null = null;

  submitted = false;

  constructor(private products: ProductsService,private fbuilder: FormBuilder, private reactiveformsmodule: ReactiveFormsModule, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fbuilder.group({
      name: ['', Validators.required],
      price: [, Validators.required],
      description: ['', Validators.required],
      picture: ['', Validators.required]
    });

    // this.getList();
    console.log(this.serve);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
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
     

    this.products.createProducts(this.serve).subscribe(err => {
      console.log("this" + err.toString());
      this.router.navigate(["/restuarant/products"])
    },(error)=>{
      this.errorMessage=error;
      
  })
  complete:()=>{
    console.log('user added succesfully')
    alert('user added successfully')
    // this.getList();
    this.form.reset();
  }

  // getList() {
  //   return this.products.getAllContact().subscribe((data: any) => {
  //     this.x = (data);
  //     console.log(data);
  //   });
  // }
}

}
