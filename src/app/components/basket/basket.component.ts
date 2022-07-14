import { Component, OnInit } from '@angular/core';
import { IBasket } from 'src/app/interfaces';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basket!: IBasket[];

  constructor() { }

  ngOnInit(): void {
    
    if (localStorage.getItem('basket') != 'undefined') {
      this.basket = JSON.parse(localStorage.getItem('basket')!);  
    }
    else
    {
      this.basket = [];
    }
    
  }

}
