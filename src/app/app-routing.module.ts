import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Creacion del objeto del array routes que va a contener las rutas y el componente que renderiza cada una
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    //Los hijos heredan la composición del padre
    children:[
      {
        path: '',
        redirectTo: '/home',
        pathMatch:'full',
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'products',
        // component: ProductsGalleryComponent
        loadChildren: () => import('./components/products-gallery/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'demo',
        component: DemoComponent
      },
      {
        path: 'home',
        // component: HomeComponent
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    // redirectTo: '/home'
    //Este objeto controla el error de las urls
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
    //Estrategia de carga de modulos, con este tipo de configuracion va a cargar todos los modulos
    //en la primera carga, pero solo hasta que este disponible la red, primero carga los necesarios
    //y a continuación ños demas
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
