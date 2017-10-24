import { equalTo } from 'ng2-validation/dist/equal-to';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  save(product) {
    return this.db.list('/products').push(product);
  }

  getProducts() {
    return this.db.list('/products');

  }

  getProduct(id) {
    return this.db.object('/products/' + id);
  }

  getProductsByCategory(category: string) {
    return this.db.list('/products', {
      query: {
        orderByChild: 'category',
        equalTo: category
      }
    });
  }

  updateProduct(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  deleteProduct(productId) {
    return this.db.object('/products/' + productId).remove();
  }

}
