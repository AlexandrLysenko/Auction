import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable()
export class ProductDataService {

	lastId: number = 0;
	step: number = 15;

	products: Product[] = [];

	constructor() { 
		this.products = [
		{id: 0, title: 'Bike', startPrice: 100, currentPrice: 400, imgUrl: 'product2.jpg'},
		{id: 0, title: 'fwefw', startPrice: 100, currentPrice: 400, imgUrl: 'product2.jpg'},
		{id: 0, title: 'fwefw', startPrice: 100, currentPrice: 400, imgUrl: 'product2.jpg'},
		{id: 0, title: 'fwefw', startPrice: 100, currentPrice: 400, imgUrl: 'product2.jpg'},
		{id: 0, title: 'fwefw', startPrice: 100, currentPrice: 400, imgUrl: 'product2.jpg'},
		]
	}

addProduct(product: Product): ProductDataService {
    if (!product.id) {
      product.id = ++this.lastId;
    }
    this.products.push(product);
    return this;
  }
getAllProducts(): Product[] {
	return this.products;
  }

submitABid(product: Product) {
	product.currentPrice += this.step;
  }

getProductById(id: number): Product {
	return this.products
	.filter(product => product.id === id)
	.pop();
  }

getProductByTitle(str: string): Product[] {
	return this.products.filter(product => product.title === str); 
  }         
}


