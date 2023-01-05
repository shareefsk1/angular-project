import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {
    constructor(){
      console.log('constructed calld') ;
    }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes called');
  }
  ngOnInit(): void {
    console.log('ngOnInit called');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

  submit(){
    console.log('Submit called.')
  }

}
