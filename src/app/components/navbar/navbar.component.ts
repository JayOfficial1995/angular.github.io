import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  siteLogo = './assets/images/site-logo.png';
  navData = [
    {
      linkText: 'Home',
      path: '/',
    },
    {
      linkText: 'About',
      path: 'about',
    },
    {
      linkText: 'Our Work',
      path: 'our-work',
    },
    {
      linkText: 'Blog',
      path: 'blog',
    },
    {
      linkText: 'Contact',
      path: 'contact',
    },
  ];

  toggleBtn = false;

  toggleMenu() {
    this.toggleBtn = !this.toggleBtn;
  }

  constructor() {}

  ngOnInit(): void {}
}
