import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { CategoryComponent } from './category/category.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path : '', redirectTo: '/products', pathMatch: 'full'},
{ path : 'products', component: ProductComponent},
{ path : 'products/:id', component: ProdDetailComponent},
{ path : 'category', component: CategoryComponent},
{ path : '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
