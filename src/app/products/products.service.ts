import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ Product} from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private  httpClient: HttpClient) { }

  createProduct(productBody: any):Observable<Product>{
    const productUrl = 'http://localhost:4200/products';
    
    return this.httpClient.post<Product>(productUrl, productBody);


  }

  viewProduct(productId: any):Observable<Product>{
    const productUrl = 'http://localhost:4200/products'+productId;
    
    return this.httpClient.get<Product>( productUrl);
  }
  updateProduct(productId: any, productBody: any):Observable<Product>{
    const productUrl = 'http://localhost:4200/products'+productId;
    
    return this.httpClient.put<Product>( productUrl,productBody);
  }




  deleteProduct(productId: any):Observable<Product>{
    const productUrl = 'http://localhost:4200/products'+productId;
    
    return this.httpClient.delete<Product>( productUrl);
  }

  searchCategoryProduct(categoryId: any):Observable<Product>{
    const productUrl = 'http://localhost:4200/products/category='+categoryId;
    
    return this.httpClient.get<Product>( productUrl);
  }

  searchDateProduct(dateParam: any):Observable<Product>{
    const productUrl = 'http://localhost:4200/products/date='+dateParam;
    
    return this.httpClient.get<Product>( productUrl);
  }



}
