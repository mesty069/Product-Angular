import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBVarComponent } from './footer-b-var/footer-b-var.component';
import { TestPageComponent } from './test-page/test-page.component';
import { SheardModule } from '../sheard/sheard.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NavBarComponent,
    FooterBVarComponent,
    TestPageComponent,
    SheardModule
  ],
  exports:[
    NavBarComponent,
    FooterBVarComponent,
    TestPageComponent,
    SheardModule
  ]
})
export class CoreModule { }
