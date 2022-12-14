import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  constructor(private _httpclient:HttpClient) { }

  getData():Observable<any>{
    return  this._httpclient.get("https://fakestoreapi.com/products") ;
  }
}
