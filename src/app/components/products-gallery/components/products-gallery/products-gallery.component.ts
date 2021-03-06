import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/productModel';
import { ProductsService } from 'src/app/components/core/services/products/products.service';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrls: ['./products-gallery.component.css']
})
export class ProductsGalleryComponent implements OnInit {

  clickProduct(id: number){
    console.log("id: "+id+" seleccionado");
  }

  products: any;
  
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      console.log(products.Datos.Ítems)
      this.products = products.Datos.Ítems;
    })
  }
}
