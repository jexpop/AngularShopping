import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrontServicesModule } from './front-services.module';
import { map, Observable } from 'rxjs';
import { IProductResponse } from '../../interfaces/product.interface';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: FrontServicesModule
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<IProductResponse[]>(`${environment.api}/product`)
    .pipe(
      map( (response: IProductResponse[]) => {
            return response.map((item: IProductResponse) => new Product(item))
      } )
    );
  }
}
