import { Component, Input, OnInit } from '@angular/core';
import { IProduct, IBasket } from '../../interfaces/';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input('item') product!: IProduct;
  basket!: IBasket[];
  isNewProduct!: boolean;

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
    
    this.isNewProduct = true;// Bandera para no duplicar productos nuevos

    /* Añadir la compra */
    if(this.basket.length) 
    {
      this.basket.forEach(item => {

        if(item.id === this.product.id) {
          item.quantity += 1;
          this.isNewProduct=false; // Lo encontramos, por lo tanto no es nuevo
        }

      });   

    }

    if(this.isNewProduct) {
      this.basket.push({ id: this.product.id, name: this.product.name, price: this.product.price, quantity: 1});
    }

    
    localStorage.setItem('basket', JSON.stringify(this.basket));

  }

}
