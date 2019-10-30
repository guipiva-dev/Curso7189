import { ProductModel } from './product.model';

export class CartModel {

    constructor(
        public products: ProductModel[] = [],
        public total: number
    ){ }
}
