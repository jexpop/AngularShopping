import { Component, Input, OnInit } from '@angular/core';
import { IProduct, IBasket } from '../../interfaces/';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: IProduct;
  basket!: IBasket[];

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {

    if (localStorage.getItem('basket') != 'undefined') {
        this.basket = JSON.parse(localStorage.getItem('basket')!);  
    }
    else
    {
      this.basket = [];
    }
    
    
    this.basket.push({ name: this.product.name, price: this.product.price, quantity: 1});
    localStorage.setItem('basket', JSON.stringify(this.basket));

  }

}
