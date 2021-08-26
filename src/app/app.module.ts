import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { Product2Component } from './components/product2/product2.component';
import { Product3Component } from './components/product3/product3.component';
import { Navi2Component } from './components/navi2/navi2.component';
import { Product4Component } from './components/product4/product4.component';
import { Product5Component } from './components/product5/product5.component';
import { Product6Component } from './components/product6/product6.component';
import { Product7Component } from './components/product7/product7.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    Product2Component,
    Product3Component,
    Navi2Component,
    Product4Component,
    Product5Component,
    Product6Component,
    Product7Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
