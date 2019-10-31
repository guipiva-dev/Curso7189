import { Component, OnInit } from '@angular/core';
import { Add } from './../../actions/cart.action';
import { Store } from '@ngrx/store';

import { ToastController } from '@ionic/angular';

import { ProductModel } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { CartModel } from 'src/app/models/cart.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];

  constructor(
    private dataService: DataService,
    private toastrCtrl: ToastController,
    private store: Store<CartModel>
  ) { }

  ngOnInit() {

    this.dataService.getProducts()
    .subscribe(
      (res) => {
        this.products = res;
      },
      (err) => {
        console.log('err');
        console.log(err);
      }
    );
  }

  async add(product: ProductModel) {
    this.store.dispatch(Add(product));

    const toastr = await this.toastrCtrl.create({
      message: `${product.title} adicionado ao carrinho.`,
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'OK'});

    await toastr.present();
  }

}
