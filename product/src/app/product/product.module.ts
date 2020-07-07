import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarComponent} from './star/star.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {MenuComponent} from './menu/menu.component';
import {FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {NgxPaginationModule} from 'ngx-pagination';
const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'create', component: ProductCreateComponent},
  {path: ':id/edit', component: ProductEditComponent}
];

@NgModule({
  declarations: [
    ProductComponent,
    StarComponent,
    ProductCreateComponent,
    ProductEditComponent,
    MenuComponent,
  ],
  exports: [
    StarComponent,
    ProductComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,

  ]
})
export class ProductModule {
}
