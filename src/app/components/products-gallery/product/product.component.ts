//Los de coradores son los que vana ayudar a angular a identificar que comportamiento va a cumplir
//la clase, puede ser un serviicio, un componente o un pipe
import {Component, EventEmitter, Input, Output} from '@angular/core'
import { product } from '../../../models/productModel'

//Los componnetes tienen metadata
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent{

    @Input() product: product;
    @Output() productCart: EventEmitter<any> = new EventEmitter();

    today = new Date();

    addCart(){
        console.log('agregado');
        this.productCart.emit(this.product.id);
    }
}