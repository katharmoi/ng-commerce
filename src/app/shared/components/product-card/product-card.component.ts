import { Router } from '@angular/router';
import { ShoppingCart } from '../../models/shopping-cart';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../models/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('products') products: Product;
  @Input('cart') cart: ShoppingCart;

  constructor(private cartService: ShoppingCartService,
    private router: Router) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);

  }
  goDetails(key: string, title: string) {
    this.router.navigate(['product-details/', key,title.replace(' ','-')]);
  }


}
