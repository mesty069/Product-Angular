import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../sheard/Pagination';
import { ICategory } from '../sheard/Category';
import { map } from 'rxjs/operators';
import { ShopParams } from '../sheard/shopparams';
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  BaseURL = "https://localhost:44386/api/";
  constructor(private http:HttpClient) { }
  getproducts(ShopParams:ShopParams)
  {
    let params = new HttpParams();
 
    if(ShopParams.categoryId)
    {
      params = params.append("categoryid", ShopParams.categoryId.toString());
    }
    if(ShopParams.search)
    {
      debugger
    params = params.append('Search',ShopParams.search);
    }
    params = params.append('Sorting',ShopParams.sort);
    params = params.append('pageNumber',ShopParams.pageNumber);
    params = params.append('pageSize',ShopParams.pageSize);
    
    return this.http.get<IPagination>(this.BaseURL + "Product/get-all-products",
      {observe:'response',params}).pipe(map( response=>{return response.body}));
  }
  getcategories()
  {
    return this.http.get<ICategory[]>(this.BaseURL + "Category/get-all-category")
  }
}
