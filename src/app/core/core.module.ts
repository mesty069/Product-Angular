import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBVarComponent } from './footer-b-var/footer-b-var.component';
import { TestPageComponent } from './test-page/test-page.component';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NavBarComponent,
    FooterBVarComponent,
    TestPageComponent
  ],
  exports:[
    NavBarComponent,
    FooterBVarComponent,
    TestPageComponent
  ]
})
export class CoreModule { }
