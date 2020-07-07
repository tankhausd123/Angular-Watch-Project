import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductInterface} from './ProductInterface';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList: ProductInterface[] = [];


  p = 1;

  constructor(private productService: ProductService,
              private route: Router) {
  }
  ngOnInit() {
    this.getAll();
  }
  searchProduct(result) {
    if (result) {
      this.productList = result;
    } else {
      this.productService.getProduct().subscribe((data: ProductInterface[]) => {
        this.productList = data;
      });
    }
  }

  getAll() {
    this.productService.getProduct().subscribe((data: ProductInterface[]) => {
      this.productList = data;
    });
  }

  deleteProduct(id) {
    if (confirm('Are you delete this product?')) {
      this.productService.delete(id).subscribe(() => {
        return this.getAll();
      });
    }
  }
}
