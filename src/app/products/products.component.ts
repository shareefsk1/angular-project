import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {


  public details :any = [] ;

  public keys: any = [] ;

 

  constructor(private _productServices:ProductsService) {
    
    this.details = _productServices.productsdetails ;
    
    this.keys = Object.keys(this.details[0]) ;
  }

  
  sorting(){
  
    this.details = this.details.sort((a:any,b:any)=>b.price-a.price);
  }
}
