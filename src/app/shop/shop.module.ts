import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopItemsComponent } from './shop-items/shop-items.component';
import { FooterBVarComponent } from "../core/footer-b-var/footer-b-var.component";
import { SheardModule } from '../sheard/sheard.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    ShopComponent,
    ShopItemsComponent
  ],
  imports: [
    CommonModule,
    FooterBVarComponent,
    SheardModule,
    PaginationModule
],
  exports:[
    ShopComponent,
    ShopItemsComponent,
    PaginationModule
  ]
})
export class ShopModule { }
