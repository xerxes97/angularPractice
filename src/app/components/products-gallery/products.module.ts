import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ProductsGalleryComponent } from './products-gallery/products-gallery.component';
import { GalleryRoutingModule } from './products-routing.module';

@NgModule({
    declarations:[
        // ProductComponent,
        // ProductsGalleryComponent
    ],
    imports:[
        SharedModule,
        GalleryRoutingModule
    ]

})

export class ProductsModule{

}