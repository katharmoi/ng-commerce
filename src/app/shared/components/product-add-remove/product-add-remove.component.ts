import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'product-add-remove',
  templateUrl: './product-add-remove.component.html',
  styleUrls: ['./product-add-remove.component.css']
})
export class ProductAddRemoveComponent  {

  @Input('product') product :Product;
  @Input('cart') cart;
  
  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: Product){
    this.cartService.addToCart(product);

  }

  removeFromCart(product: Product){
    this.cartService.removeFromCart(product);
  }

  
 

  

}
