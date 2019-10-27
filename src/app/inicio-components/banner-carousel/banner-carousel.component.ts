import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from '../../../../node_modules/ngx-bootstrap/carousel';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss'],
  providers: [
    {
      provide: CarouselConfig,
      useValue: { interval: 4000, noPause: true, showIndicators: false }
    }
  ]
})
export class BannerCarouselComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
