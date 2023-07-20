import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { AdminSupportComponent } from './admin-support/admin-support.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ContactComponent,
    ProductDetailComponent,
    MainComponent,
    AboutComponent,
    SupportComponent,
    AdminSupportComponent,
    CustomerSupportComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [MainComponent]
})
export class AppModule { }
