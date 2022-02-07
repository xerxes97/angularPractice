import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/products-gallery/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery/products-gallery.component';
import { DemoComponent } from './components/demo/demo.component';
import { SwiperModule } from 'swiper/angular';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component'
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ContactComponent,
    ProductsGalleryComponent,
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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
