import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  id: any;
  product: Product;
  
  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute){
    this.product = {} as Product;
  }

  ngOnInit(){
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._productService.getProductById(this.id).subscribe(product=>{
      this.product = product;
    },
    error=> {
      console.log('Error while fetching the product')
    })
  }
}
