import { Component, OnInit } from '@angular/core';
import { Product } from '../../product'
import {ProductDataService} from '../../product-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  imgPath:any = 'images/';
	
  constructor(private productDataService: ProductDataService) {
  }

   get products() {
    return this.productDataService.getAllProducts();
  }

  submitABid(product) {
  	return this.productDataService.submitABid(product);
  }

}
