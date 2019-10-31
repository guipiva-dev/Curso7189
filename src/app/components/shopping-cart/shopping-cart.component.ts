import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { Store, select } from '@ngrx/store';
import { Remove, Clear } from './../../actions/cart.action';
import { CartModel } from './../../models/cart.model';
import { ProductModel } from './../../models/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {

  cart$: Observable<CartModel>;

  constructor(private store: Store<CartModel>,
              private alertCtrl: AlertController) {
    this.cart$ = store.pipe(select('cart'));
  }

  ngOnInit() { }

  remove(product: ProductModel) {
    this.store.dispatch(Remove(product));
  }

  reset() {
    console.log(this.cart$);
    this.store.dispatch(Clear());
  }

  async presentRemoveConfirm(item: ProductModel) {
    const alert = await this.alertCtrl.create({
      header: 'Remover item',
      message: `Deseja remover o item ${item.title}`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar'
        },
        {
          text: 'Remover',
          handler: () => {
            this.remove(item);
          }
        }
      ]
    });

    await alert.present();
  }
}
