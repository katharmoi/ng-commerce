import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Observable } from 'rxjs/Rx';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart$: Observable<ShoppingCart>;
  
  constructor(
    public auth : AuthService,
    private cartService: ShoppingCartService) {
   }

  logout(){
    this.auth.logout();
  }

  async ngOnInit(){
    this.cart$ = await this.cartService.getCart();
  }


}
