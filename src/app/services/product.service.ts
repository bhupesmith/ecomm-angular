import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product";

@Injectable()
export class ProductService{
    message: string = 'Manage Products';
    API_URL: string = 'http://localhost:3000/products';
    constructor(private _httpClient: HttpClient){}
    getAllProducts(): Observable<Product[]> {
        return this._httpClient.get<Product[]>(`${this.API_URL}`)
    }
    getProductById(id: number): Observable<Product>{
        return this._httpClient.get<Product>(`${this.API_URL}/${id}`)
    }
}