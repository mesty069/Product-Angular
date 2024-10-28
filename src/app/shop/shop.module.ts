import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopItemsComponent } from './shop-items/shop-items.component';
import { FooterBVarComponent } from "../core/footer-b-var/footer-b-var.component";


@NgModule({
  declarations: [
    ShopComponent,
    ShopItemsComponent
  ],
  imports: [
    CommonModule,
    FooterBVarComponent
],
  exports:[
    ShopComponent,
    ShopItemsComponent
  ]
})
export class ShopModule { }
