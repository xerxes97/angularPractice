import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../../../../models/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products: product[] = [
  //   {
  //     id: '1',
  //     image: 'assets/images/camiseta.png',
  //     title: 'Camiseta',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '2',
  //     image: 'assets/images/hoodie.png',
  //     title: 'Hoodie',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '3',
  //     image: 'assets/images/mug.png',
  //     title: 'Mug',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '4',
  //     image: 'assets/images/pin.png',
  //     title: 'Pin',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '5',
  //     image: 'assets/images/stickers1.png',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '6',
  //     image: 'assets/images/stickers2.png',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   }
  // ];
  
  constructor(
    private http: HttpClient
  ) {
    //Creacion del cliente http para el manejo de informacion
  }

  getAllProducts() {
    return this.http.get<any>('https://losprecios.co/producto/detalles?ID=1&ClaveAPI=qcJOR47nfr2Fj922');
  }

  getProductById(id: string){
    return this.http.get(`https://losprecios.co/%C3%ADtem/detalles?ID=${id}&ClaveAPI=qcJOR47nfr2Fj922`)
  }

  updateProduct(){

  }

  deleteProduct(){

  }
  
}
