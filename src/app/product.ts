export class Product {
	id: number;
	title: string;
	startPrice: number;
	currentPrice: number;
	imgUrl: string = 'images/';

	constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

