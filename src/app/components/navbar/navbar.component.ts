import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartModel } from 'src/app/models/cart.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  cart$: Observable<CartModel>;

  constructor(
    private store: Store<CartModel>
  ) {
    this.cart$ = this.store.pipe(select('cart'));
  }

  ngOnInit() {}

}
