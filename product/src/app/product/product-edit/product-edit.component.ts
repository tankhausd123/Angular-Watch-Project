import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productFormEdit = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    star: ['', Validators.required]
  });
  id = +this.routerMap.snapshot.paramMap.get('id');

  constructor(private productService: ProductService,
              private routerMap: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.productService.findProductById(this.id).subscribe(data => {
      this.productFormEdit.patchValue({
        name: data.name,
        price: data.price,
        star: data.star
      });
    });
  }

  update() {
    const productData = this.productFormEdit.value;
    this.productService.update(productData, this.id).subscribe(result => {
      this.router.navigate(['/products']);
    });
  }

  get name() {
    return this.productFormEdit.get('name');
  }

  get price() {
    return this.productFormEdit.get('price');
  }

  get star() {
    return this.productFormEdit.get('star');
  }
}
