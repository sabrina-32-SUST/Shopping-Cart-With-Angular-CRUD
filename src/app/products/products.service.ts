import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private  httpClient: HttpClient) { }

  createProduct(productBody: any){
    const productUrl = 'http://localhost:4200/products';
    
    return this.httpClient.post(productUrl, productBody);


  }

  viewProduct(productId: any){
    const productUrl = 'http://localhost:4200/products'+productId;
    
    return this.httpClient.get( productUrl);
  }
  updateProduct(productId: any, productBody: any){
    const productUrl = 'http://localhost:4200/products'+productId;
    
    return this.httpClient.put( productUrl,productBody);
  }




  deleteProduct(productId: any){
    const productUrl = 'http://localhost:4200/products'+productId;
    
    return this.httpClient.delete( productUrl);
  }

  searchCategoryProduct(categoryId: any){
    const productUrl = 'http://localhost:4200/products/category='+categoryId;
    
    return this.httpClient.get( productUrl);
  }

  searchDateProduct(dateParam: any){
    const productUrl = 'http://localhost:4200/products/date='+dateParam;
    
    return this.httpClient.get( productUrl);
  }



}
