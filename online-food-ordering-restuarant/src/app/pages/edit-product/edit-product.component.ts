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
  originalProduct: any;

  serve = {};
  public errorMessage : string | null = null;

  submitted = false;


  constructor(private route: ActivatedRoute, private productsService: ProductsService,private fbuilder: FormBuilder, private reactiveformsmodule: ReactiveFormsModule, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productsService.getById(id).subscribe(
      response => {
        this.product = response.data;
        this.originalProduct = Object.assign({}, response.data);
        console.log(this.product)
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    const updatedProduct = Object.assign({}, this.product);
    updatedProduct.name = this.form.value.name || this.originalProduct.name;
    updatedProduct.price = this.form.value.price || this.originalProduct.price;
    updatedProduct.description = this.form.value.description || this.originalProduct.description;

    this.productsService.updateProducts(updatedProduct).subscribe(() => {
      this.router.navigate(['restuarant/products']);
    });
  }
}




// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProductsService } from 'src/app/service/products.service';

// @Component({
//   selector: 'app-edit-product',
//   templateUrl: './edit-product.component.html',
//   styleUrls: ['./edit-product.component.css']
// })
// export class EditProductComponent implements OnInit {

//   form = new FormGroup({
//     name: new FormControl(''),
//     price: new FormControl(),
//     description: new FormControl(''),
//   })

//   product: any;
//   originalProduct: any;

//   serve = {};
//   public errorMessage : string | null = null;

//   submitted = false;


//   constructor(private route: ActivatedRoute, private productsService: ProductsService,private fbuilder: FormBuilder, private reactiveformsmodule: ReactiveFormsModule, private router: Router) { }

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     this.productsService.getById(id).subscribe(
//       response => {
//         this.product = response.data;
//         this.originalProduct = Object.assign({}, response.data);
//         console.log(this.product)
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   }

//   onSubmit() {
//     const updatedProduct = Object.assign({}, this.product);
//     updatedProduct.name = this.form.value.name || this.originalProduct.name;
//     updatedProduct.price = this.form.value.price || this.originalProduct.price;
//     updatedProduct.description = this.form.value.description || this.originalProduct.description;

//     this.productsService.updateProducts(updatedProduct).subscribe(() => {
//       this.router.navigate(['restuarant/products']);
//     });
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProductsService } from 'src/app/service/products.service';

// @Component({
//   selector: 'app-edit-product',
//   templateUrl: './edit-product.component.html',
//   styleUrls: ['./edit-product.component.css']
// })
// export class EditProductComponent implements OnInit {

//   form = new FormGroup({
//     name: new FormControl(''),
//     price: new FormControl(),
//     description: new FormControl(''),
    
//   })

//   product: any;

//   serve = {};
//   public errorMessage : string | null = null;

//   submitted = false;


//   constructor(private route: ActivatedRoute, private productsService: ProductsService,private fbuilder: FormBuilder, private reactiveformsmodule: ReactiveFormsModule, private router: Router) { }

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     this.productsService.getById(id).subscribe(
//       response => {
//         this.product = response.data;
//         console.log(this.product)
//       },
//       error => {
//         console.log(error);
//       }
//     );


//   }


//   onSubmit() {
//     this.product.name = this.form.value.name;
//     this.product.price = this.form.value.price;
//     this.product.description = this.form.value.description;
//     // this.serve = {
//     //   data:{
//     //   name: this.form.value.name,
//     //   price: this.form.value.price,
//     //   description: this.form.value.description,
//     //   // picture: this.form.value.picture,
//     //   }
//     // };
//     // console.log(this.serve),"why";

//     this.productsService.updateProducts(this.product).subscribe(() => {
//       this.router.navigate(['restuarant/products']);
//     });

// }}

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProductsService } from 'src/app/service/products.service';

// @Component({
//   selector: 'app-edit-product',
//   templateUrl: './edit-product.component.html',
//   styleUrls: ['./edit-product.component.css']
// })
// export class EditProductComponent implements OnInit {

//   form = new FormGroup({
//     name: new FormControl(''),
//     price: new FormControl(),
//     description: new FormControl(''),
//     // picture: new FormControl('')
//   });

//   product: any;
//   errorMessage: string | null = null;
//   submitted = false;

//   constructor(private route: ActivatedRoute, private productsService: ProductsService, private router: Router) { }

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     this.productsService.getById(id).subscribe(
//       response => {
//         this.product = response.data;
//         this.form.patchValue(this.product); // set the form values to the product values
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   }

//   onSubmit(): void {
//     this.submitted = true;
//     if (this.form.valid) {
//       const id = this.route.snapshot.paramMap.get('id');
//       if (id !== null) {
//         const updatedProduct = {
//           name: this.form.value.name,
//           price: this.form.value.price,
//           description: this.form.value.description,
       
//         };
//       this.productsService.updateProducts(id, updatedProduct).subscribe(
//         () => {
//           this.router.navigate(['restaurant/products']);
//         },
//         error => {
//           console.log(error);
//           this.errorMessage = 'An error occurred while updating the product.';
//         }
//       );
//     }
//   }

// }
// }
