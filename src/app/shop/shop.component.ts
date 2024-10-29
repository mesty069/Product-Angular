import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { IProducts } from '../sheard/Products';
import { ShopService } from './shop.service';
import { ICategory } from '../sheard/Category';
import { ShopParams } from '../sheard/shopparams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  products:IProducts[];
  category:ICategory[];
  ShopParams = new ShopParams;
  totalCount:number;

  @ViewChild('search') searchterms:ElementRef;
constructor(private shopservices:ShopService)
{

}
soreOptions=
[
  {name:'名稱' ,value:'Name'},
  {name:'價格：小到大',value:'PriceAsc'},
  {name:'價格：大到小',value:'PriceDesc'},
]
ngOnInit(): void {
  this.getproducts();
  this.getcategories();
}
getproducts() {
  this.shopservices.getproducts(this.ShopParams).subscribe(
    (res) => { 
      this.products = res.data 
      this.ShopParams.totalCount=res.pageCount
      this.ShopParams.pageNumber=res.pageNumber
      this.ShopParams.pageSize=res.pageSize
debugger
    }
  )
}
  getcategories()
  {
    this.shopservices.getcategories().subscribe(res => { this.category = [{ id: 0, name:'All' , description:''},...res]})
  }
  oncatagoryselect(categoryid:number)
  {
    this.ShopParams.categoryId = categoryid;
    this.getproducts();
  }
  onsortSeleted(sort:Event)
  {
    let sortValue=(sort.target as HTMLInputElement).value;
    this.ShopParams.sort=sortValue;
    this.getproducts();
  }
  onPageChanged(Event:any)
  {
    debugger
    this.ShopParams.pageNumber=Event;
    this.getproducts();
  }
  onsearch(searchterm:any)
  {
    this.ShopParams.search=searchterm;
    this.getproducts();
  }
  onsearchinput()
  {

    this.ShopParams.search=this.searchterms.nativeElement.value;
    console.log( this.ShopParams.search);
    this.getproducts();
  }
}
