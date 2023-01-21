import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  bannerPosts = [
    {
      img: "assets/img/banner/04.jpg",
      tag: 'The ultimate luxury experience',
      title: "<p>LÀ OÙ LA VIE EST <br> PLUS DOUCE</p>",
    },
    {
      img: "assets/img/banner/05.jpg",
      tag: 'The ultimate luxury experience',
      title: "<p>LÀ OÙ LA VIE EST <br> PLUS DOUCE</p>",
      
    },
  ];
  settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    fade: true,
    arrows: false,
  };

  ngOnInit(): void {
  }

}
