export class Product {
	id: number;
	title: string;
	startPrice: number;
	currentPrice: number;
	imgUrl: string;

	constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

