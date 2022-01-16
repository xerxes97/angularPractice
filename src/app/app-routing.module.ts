import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';

// Creacion del objeto del array routes que va a contener las rutas y el componente que renderiza cada una
const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'products',
    component: ProductsGalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
