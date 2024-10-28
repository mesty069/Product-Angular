import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../sheard/Pagination';
import { ICategory } from '../sheard/Category';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  BaseURL = "https://localhost:44386/api/";
  constructor(private http:HttpClient) { }
  getproducts(categoryid?:number)
  {
    let params = new HttpParams();
    if(categoryid)
    {
      params = params.append("categoryid", categoryid.toString());
    }

    return this.http.get<IPagination>(this.BaseURL + "Product/get-all-products",
      {observe:'response',params}).pipe(map( response=>{return response.body}));
  }
  getcategories()
  {
    return this.http.get<ICategory[]>(this.BaseURL + "Category/get-all-category")
  }
}
