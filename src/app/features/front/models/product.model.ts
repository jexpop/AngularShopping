import { IProductResponse } from "../interfaces/product.interface";

export class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;

    constructor(data?: IProductResponse) {
        this.id = data?.id ? data?.id : '';
        this.name = data?.name ? data?.name : '';
        this.description = data?.description ? data?.description : '';
        this.price = data?.price ? data?.price : 0;
        this.image = data?.images ? data?.images[0] : '';
    }
}