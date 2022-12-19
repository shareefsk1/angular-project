import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

public productsdetails: any = [{name:'samsung',price:25000,quantity:0, rating:3},
                                {name:'nokia',price:15000,quantity:0, rating:4.5},
                                {name:'oppo',price:7000,quantity:0, rating:2.9},
                                {name:'realme',price:21000,quantity:0, rating:4.2},
                                {name:'honor',price:18000,quantity:0, rating:2}]

  constructor() { }
}
