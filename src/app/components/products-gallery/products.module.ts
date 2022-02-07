import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';
import { GalleryRoutingModule } from './products-routing.module';

@NgModule({
    declarations:[
        ProductComponent,
        ProductsGalleryComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        GalleryRoutingModule
    ]

})

export class ProductsModule{

}