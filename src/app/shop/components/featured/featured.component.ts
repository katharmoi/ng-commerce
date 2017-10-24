import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '300px',
        thumbnails: false,
        preview: false,
        imageArrowsAutoHide: true,
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80
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

}
