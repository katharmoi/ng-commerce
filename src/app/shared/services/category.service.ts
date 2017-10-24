import { ProductCategory } from '../models/product-category';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories(): FirebaseListObservable<ProductCategory[]> {
    return this.db.list('/product_categories', {
      query:{
        orderByChild : 'name'
      }
    });
  }

}
