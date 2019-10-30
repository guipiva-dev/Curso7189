import { ActionModel } from './../models/action.model';
import { ActionTypes } from './../actions/cart.action';
import { CartModel } from './../models/cart.model';
import { ProductModel } from '../models/product.model';

export const cart: CartModel = new CartModel();

export function CartReducer(
    state = cart,
    action: ActionModel
) {
    switch (action.type) {
        case ActionTypes.Add:
            state.products.push(action.payload);
            state.total = calculateTotal(cart.products);

            console.log(state);
            return state;

        case ActionTypes.Remove:
            const index = state.products.indexOf(action.payload);
            state.products.splice(index, 1);
            state.total = calculateTotal(cart.products);

            console.log(state);
            return state;

        case ActionTypes.Clear:
            state = new CartModel();
            state.total = calculateTotal(cart.products);

            console.log(state);
            return state;
        default:
            return state;

    }
}

function calculateTotal(products: ProductModel[]): number {
    let total = 0;

    products.forEach(item => {
        total += item.price;
    });

    return total;
}