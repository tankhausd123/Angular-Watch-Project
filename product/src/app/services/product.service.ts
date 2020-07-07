import {Injectable} from '@angular/core';
import {ProductInterface} from '../product/ProductInterface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8000/api/products';


  constructor(private http: HttpClient) {
  }

  products: ProductInterface[] = [];

  getProduct(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.url);
  }

  add(product: ProductInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(this.url + '/create', product);
  }

  findProductById(id: number): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(this.url + '/' + id);
  }

  update(product, idProduct) {
    return this.http.put(this.url + '/' + idProduct + '/update', product);
  }

  delete(idProduct: number): Observable<ProductInterface> {
    return this.http.delete<ProductInterface>(this.url + '/' + idProduct + '/delete');
  }
  searchProduct(textSearch) {
    this.getProduct().subscribe(value => {
      this.products = value;
    });
    console.log(this.products.filter(product =>  product.name.indexOf(textSearch) !== -1 ));
    return this.products.filter(product =>  product.name.includes(textSearch) );
  }
}
