import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fa-event-databinding',
  template: `
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventDatabindingComponent {
    @Output('clickable') clicked = new EventEmitter<string>();

    onClicked() {
      this.clicked.emit('It worked!');
    }
}
