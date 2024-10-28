import { Component,Input, OnInit } from '@angular/core';
import { IProducts } from '../../sheard/Products';

@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrl: './shop-items.component.scss'
})
export class ShopItemsComponent implements OnInit{
  @Input() products!: IProducts;
  ngOnInit(): void{
  }
}
