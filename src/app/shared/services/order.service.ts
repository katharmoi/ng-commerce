import { ShoppingCartService } from './shopping-cart.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class OrderService {

  private ordersEndPoint = "/orders";
  constructor(
    private db: AngularFireDatabase,
    private cartService: ShoppingCartService) { }

  async saveOrder(order){
    let result = await this.db.list(this.ordersEndPoint).push(order);
    this.cartService.clearCart();
    return result;
  }

}
