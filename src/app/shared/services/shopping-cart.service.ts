import { ShoppingCart } from '../models/shopping-cart';
import { Product } from '../models/product';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class ShoppingCartService {

  private cartEndPoint = '/shopping-carts/';
  private itemsNode = '/items/';

  constructor(private db: AngularFireDatabase) { }

  create() {
    return this.db.list(this.cartEndPoint).push({
      creationDate: new Date().getTime()
    });
  }


  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCardId();
    return this.db.object(this.cartEndPoint + cartId)
    .map(x => new ShoppingCart(x.items));
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object(this.cartEndPoint + cartId + this.itemsNode + productId);
  }

  private async getOrCreateCardId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart(product: Product) {
    this.updateItem(product,1);
  }

  async removeFromCart(product: Product){
    this.updateItem(product,-1);
  }

  async clearCart(){
    let cartId = await this.getOrCreateCardId();
    this.db.object(this.cartEndPoint +cartId +this.itemsNode ).remove();
  }

  private async updateItem(product: Product, change: number){
    let cartId = await this.getOrCreateCardId();
    let item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe(item => {
      let quantity = (item.quantity || 0) + change;
      if(quantity === 0) item$.remove();
      else{
        item$.update({
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price, 
          quantity: quantity  });
      }
      
    });
  }

}
