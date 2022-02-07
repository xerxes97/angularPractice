import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
//El modulo de common es el que importa todas las directivas nativas de angular como el ngFof y el ngIf

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
