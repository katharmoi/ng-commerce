import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from '../../../shared/services/order.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Order } from '../../../shared/models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  subscription: Subscription;
  userId: string;

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.subscription=this.authService.user$.subscribe(user => this.userId = user.uid);
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.cart,this.shipping);
    let result = await this.orderService.saveOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }

}
