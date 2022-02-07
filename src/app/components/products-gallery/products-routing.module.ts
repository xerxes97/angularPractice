import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';

const routes: Routes =[{
    path:'',
    component: ProductsGalleryComponent
}];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class GalleryRoutingModule{

}