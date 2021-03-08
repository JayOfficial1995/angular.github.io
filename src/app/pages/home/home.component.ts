import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  servicesData = [
    {
      heading: 'Hey, It is Responsive?',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem haru sapiente veritatis quae, .',
    },
    {
      heading: 'Psd Files Included',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem haru sapiente ',
    },
    {
      heading: 'How About Wordpress',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem haru sapiente veritatis quae, .',
    },
  ];

  citiesData = [
    {
      imageSrc: './assets/images/cities-images/city-one.jpg',
      imageAlt: 'Islamabad',
      heading: 'Islambad',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem haru sapiente veritatis quae, ',
    },
    {
      imageSrc: './assets/images/cities-images/city-two.jpg',
      imageAlt: 'Rawalpindi',
      heading: 'Rawalpindi',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem haru sapiente veritatis quae, ',
    },
    {
      imageSrc: './assets/images/cities-images/city-three.jpg',
      imageAlt: 'Sialkot',
      heading: 'Sialkot',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem haru sapiente veritatis quae, ',
    },
    {
      imageSrc: './assets/images/cities-images/city-four.jpg',
      imageAlt: 'Kashmir',
      heading: 'Kashmir',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem haru sapiente veritatis quae, ',
    },
  ];

  heading = 'About Us';

  constructor() {}

  ngOnInit(): void {}
}
