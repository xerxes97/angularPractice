import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { SwiperModule } from 'swiper/angular';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component'
import { SharedModule } from './components/shared/shared.module';
import { CoreModule } from './components/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DemoComponent,
    NotFoundComponent,
    ProductDetailComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    SharedModule,
    CoreModule,
    HttpClientModule
    //Este modulo es el que permita hacer las peticiones a apis
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
