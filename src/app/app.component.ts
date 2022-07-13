import { Component } from '@angular/core';

interface IProduct {
  id: number,
  name: string,
  description: string,
  price: number,
  brand: string,
  img: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Shopping';
  products: IProduct[] =[]

  constructor(){}
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

}
