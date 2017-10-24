import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Product } from '../../../shared/models/product';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  product: Product;
  cart: any;
  id: string;
  subscription: Subscription;


  constructor(
    private productService: ProductService,
    private cartService: ShoppingCartService,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.id)
      .take(1)
      .subscribe(product => this.product = product);
    this.galleryOptions = [
      {
        width: '90%',
        height: '90%',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/1-small.jpg',
        medium: 'assets/1-medium.jpg',
        big: 'assets/1-big.jpg'
      },
      {
        small: 'assets/2-small.jpg',
        medium: 'assets/2-medium.jpg',
        big: 'assets/2-big.jpg'
      },
      {
        small: 'assets/3-small.jpg',
        medium: 'assets/3-medium.jpg',
        big: 'assets/3-big.jpg'
      }
    ];
  }

  async ngOnInit() {
    this.subscription = (await this.cartService.getCart())
      .subscribe(cart => this.cart = cart);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}

