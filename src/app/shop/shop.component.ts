import { Component, OnInit } from '@angular/core';
import { IProducts } from '../sheard/Products';
import { ShopService } from './shop.service';
import { ICategory } from '../sheard/Category';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  products:IProducts[];
  category:ICategory[];
  categoryIdSelected:number=0;
constructor(private shopservices:ShopService)
{

}
ngOnInit(): void {
  this.getproducts();
  this.getcategories();
}
getproducts() {
  this.shopservices.getproducts(this.categoryIdSelected).subscribe(
    (res) => { this.products = res.data }
  )
}
  getcategories()
  {
    this.shopservices.getcategories().subscribe(res => { this.category = [{ id: 0, name:'All' , description:''},...res]})
  }
  oncatagoryselect(categoryid:number)
  {
    this.categoryIdSelected = categoryid;
    this.getproducts();
  }
  
}
