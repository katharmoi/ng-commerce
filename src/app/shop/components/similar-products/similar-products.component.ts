import { ProductService } from '../../../shared/services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'shared/models/product';

@Component({
  selector: 'similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.css']
})
export class SimilarProductsComponent implements OnInit {

  @Input('products') products : Product[];
  @Input('category') category: string;


  constructor(productService:ProductService) {
    productService.getProductsByCategory(this.category)
    .take(1)
    .subscribe(products => this.products = products);
   }

  ngOnInit() {
  }

}
