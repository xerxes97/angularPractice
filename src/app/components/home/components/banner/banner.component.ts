import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  images: string[] = [
    'assets/images/banner-1.webp',
    'assets/images/banner-2.webp',
    'assets/images/banner-3.webp'
  ];

  ngOnInit(): void {
  }

}
