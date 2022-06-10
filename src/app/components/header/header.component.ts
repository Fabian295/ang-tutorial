import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logoUrl: string = 'assets/img/logo_purple.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
