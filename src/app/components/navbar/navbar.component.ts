import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbar:any = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'About',
      link: '/about'
    },
    {
      label: 'Causes',
      link: '/causes'
    },
    {
      label: 'Contact',
      link: '/contact'
    },
  ]
  constructor() {}

  ngOnInit(): void {
  }

}
