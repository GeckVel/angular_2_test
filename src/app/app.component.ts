import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Root component</h1>
      <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
          <p>{{ test }}</p>
      </fa-lifecycle>
      <button (click)="delete = true">Clicked to delete</button>
      <button (click)="test = 'Change value'">Clicked to change content</button>
      <button (click)="boundValue='2000'">Clicked to change binding</button>
  `,
  styles: [` h1 { color: red; } `]
})
export class AppComponent {
    delete = false;
    test = 'Starting value';
    boundValue = 1000;
}
