import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import {ProductDataService} from '../product-data.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private productDataService: ProductDataService) {
  }

  getProductByTitle(str) {
  	this.productDataService.getProductByTitle(str);
  }
}
