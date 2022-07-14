import { Component, OnInit } from '@angular/core';
import { IProduct, IBasket } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Shopping';
  products!: IProduct[];
  basket!: IBasket[];
  show!: boolean;

  constructor(){
    localStorage.setItem("basket", JSON.stringify(this.basket));
    this.show = false;
   }

  ngOnInit(){
    this.products = [
      { id: 1, name: 'p1', description: 'bla bla bla', price: 2, brand: 'danonia', img: 'img'},
      { id: 2, name: 'p2', description: 'bla bla bla', price: 3, brand: 'crokacola', img: 'img'},    
      { id: 3, name: 'p3', description: 'bla bla bla', price: 1, brand: 'Fellero', img: 'img'}, 
      { id: 4, name: 'p4', description: 'bla bla bla', price: 20, brand: 'Arisko', img: 'img'},    
      { id: 5, name: 'p5', description: 'bla bla bla', price: 9, brand: 'DeLaCasada', img: 'img'},    
      { id: 6, name: 'p6', description: 'bla bla bla', price: 12, brand: 'Bolacao', img: 'img'}    
    ];    
  }

  toogleBasket(){
    this.show = !this.show;
  }

}
