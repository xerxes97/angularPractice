import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { product } from 'src/app/models/productModel';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: product | any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id = params['id'];
      this.product = this.productsService.getProductById(id);
    });
    // Toma los parametros que estan dentro de la ruta
  }

}
