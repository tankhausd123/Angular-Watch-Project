import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    image: ['assets/ProductImage/dong-ho.jpg'],
    star: ['', Validators.required]
  });

  constructor(private productService: ProductService,
              private fb: FormBuilder,
              private route: Router) { }

  ngOnInit() {
  }
  create() {
    const newProduct = this.productForm.value;
    this.productService.add(newProduct).subscribe(data => {
      this.route.navigate(['/products']);
    });
  }

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }
  get star() {
    return this.productForm.get('star');
  }
}
