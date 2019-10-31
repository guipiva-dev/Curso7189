import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CartModel } from '../models/cart.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cart$: Observable<CartModel>;

  constructor(private store: Store<CartModel>) {
  this.cart$ = store.pipe(select('cart'));
  }
}
