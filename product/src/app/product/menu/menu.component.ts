import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductInterface} from '../ProductInterface';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() product = new EventEmitter();

  constructor(private productService: ProductService) {
  }

  productSearch: ProductInterface[] = [];

  ngOnInit() {
    this.productService.getProduct().subscribe((data: ProductInterface[]) => {
      this.productSearch = data;
    });
  }

  productFilter(event) {
    const keyWord = event.target.value;
    if (event) {
      this.productSearch = this.productService.searchProduct(keyWord);
    } else {
      this.productService.getProduct().subscribe((data: ProductInterface[]) => {
        this.productSearch = data;
      });
    }
    this.product.emit(this.productSearch);
  }
}
