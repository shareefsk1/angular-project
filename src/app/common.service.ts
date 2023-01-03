import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public count:number = 0 ;
  public countSub: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  setValue(){
    this.countSub.next(this.count++) ;
  }

  getValue(){
    return this.countSub.asObservable();
  }

}
