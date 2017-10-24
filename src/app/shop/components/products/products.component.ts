import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  

  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  subscription: Subscription;
  cart: any;


  constructor(
    productService: ProductService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService) {
      let subs : Subscription;
      this.subscription = productService.getProducts()
      .switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');

        //filter Products
        this.filteredProducts = (this.category) ?
          this.products.filter(product =>
            product.category === this.category) :
          this.products;

      });
  }

  async ngOnInit() {
    let subs=(await this.cartService.getCart())
    .subscribe(cart =>{
      this.cart = cart;
    });
    this.subscription.add(subs);
  }

  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
