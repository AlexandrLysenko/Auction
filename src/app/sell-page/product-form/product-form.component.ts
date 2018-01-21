import { Component, OnInit } from '@angular/core';
import { ImageUploadModule } from "angular2-image-upload";
import * as $ from 'jquery';


import { Product } from '../../product'
import {ProductDataService} from '../../product-data.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  newProduct: Product = new Product();


  constructor(private productDataService: ProductDataService) {
  }

  addProduct() {
    var imageName = (<HTMLInputElement>document.getElementById('image-load')).files[0].name;
    this.newProduct.currentPrice = this.newProduct.startPrice;
    this.newProduct.imgUrl = imageName;
    console.log(imageName);
    this.productDataService.addProduct(this.newProduct);
    console.log(this.productDataService.products);
    this.newProduct = new Product();
  }

   get products() {
    return this.productDataService.getAllProducts();
  }

  ngOnInit() {
     
  }
}

