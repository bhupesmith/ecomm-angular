import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { AdminSupportComponent } from './admin-support/admin-support.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'support', component: SupportComponent },
  { path: 'admin-support', component: AdminSupportComponent },
  { path: 'customer-support', component: CustomerSupportComponent },
  { path: '**', component: PageNotFoundComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
