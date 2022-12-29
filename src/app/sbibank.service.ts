import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SbibankService {


  constructor(private _httpService:HttpClient){
   
   }
   getdata():Observable<any>{
      return this._httpService.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
   }

   getFilteredData(keyword:string):Observable<any>{
      return this._httpService.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter=" + keyword) ;
   }

   getSortedData(column:any,value:any):Observable<any>{
    return this._httpService.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy=" + column + "&order=" + value)
   }

   createAccountData(data:any):Observable<any>{
    return this._httpService.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
   }

   deleteAccount(id:any):Observable<any>{
    return this._httpService.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/" + id)
   }

   accountDetails(id:any):Observable<any>{
      return this._httpService.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/" + id)
   }

   update(data:any, id:any):Observable<any>{
      return this._httpService.put('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/' + id , data)
   }


}
