import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Creacion del objeto del array routes que va a contener las rutas y el componente que renderiza cada una
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'products',
    component: ProductsGalleryComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
    // redirectTo: '/home'
    //Este objeto controla el error de las urls
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
