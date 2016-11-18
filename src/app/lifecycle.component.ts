import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boutPar>{{ bindable }}</p>
    <p>{{boutPar.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @ViewChild('boutPar')
  boutPar: HTMLElement;

  @Input() bindable = 1000;

  constructor() {
  }
  ngOnChanges() {
    this.log('ngOnChanges');
  }
  ngOnInit() {
    this.log('ngOnInit');
  }
  ngDoCheck(){
    this.log('ngDoCheck');
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
    console.log(this.boutPar);
  }
  ngAfterViewInit(){
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
