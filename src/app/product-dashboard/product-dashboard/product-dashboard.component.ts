import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  constructor() {
    console.log('Product Dahboard Component!')
  }

  ngOnInit(): void {
  }

}
