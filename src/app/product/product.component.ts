import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[]= [];
  constructor(private _productService: ProductService){}

  ngOnInit(){
    this._productService.getAllProducts().subscribe(products=> {
      this.products = products;
      console.log(this.products)
    }, error=>{
      console.log('Error while fetching products')
    })
  }
}
