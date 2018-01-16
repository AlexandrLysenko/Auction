import { Component, OnInit } from '@angular/core';
import { ImageUploadModule } from "angular2-image-upload";


import { Product } from '../../product'
import {ProductDataService} from '../../product-data.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent  {

  newProduct: Product = new Product();

  constructor(private productDataService: ProductDataService) {
  }

  addProduct() {
    this.productDataService.addProduct(this.newProduct);
    console.log(this.productDataService.products);
    this.newProduct = new Product();
  }

   get products() {
    return this.productDataService.getAllProducts();
  }

}
