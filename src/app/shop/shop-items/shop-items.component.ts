import { Component,Input, OnInit , ChangeDetectorRef, AfterViewInit} from '@angular/core';
import { IProducts } from '../../sheard/Products';

@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrl: './shop-items.component.scss'
})
export class ShopItemsComponent implements AfterViewInit {
  @Input() products!: IProducts;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    // 確保內容完全載入並檢測變更
    this.cdr.detectChanges();
  }
}