import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../commons/services/product.service';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-front-main',
  templateUrl: './front-main.view.html',
  styleUrls: ['./front-main.view.scss']
})
export class FrontMainView implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll()
    .subscribe(
      response => {
        this.products = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
