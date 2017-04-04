import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Person } from '../models/person';

@Component({
  selector: 'person-list',
  template: `
  <ul>
    <li *ngFor="let person of people | async" [class.attending]="person.attending">
      {{person.name}} - Guests: {{person.guests}}
      <button (click)="addGuest(person.id)">+</button>
      <button *ngIf="person.guests" (click)="removeGuest(person.id)">-</button>
      Attending?
      <input type="checkbox" [checked]="person.attending" (change)="toggleAttending(person.id)" />
      <button (click)="removePerson(person.id)">Delete</button>
    </li>
  </ul>
  {{(people | async) | json}}
  `
})
export class PersonListComponent {
  @Input() people: Observable<Person[]>;
  @Output() onAddGuest = new EventEmitter<number>();
  @Output() onRemoveGuest = new EventEmitter<number>();
  @Output() onToggleAttending = new EventEmitter<number>();
  @Output() onRemovePerson = new EventEmitter<number>();

  addGuest(personId: number): void {
    this.onAddGuest.emit(personId);
  }

  removeGuest(personId: number): void {
    this.onRemoveGuest.emit(personId);
  }

  toggleAttending(personId: number): void {
    this.onToggleAttending.emit(personId);
  }

  removePerson(personId: number): void {
    this.onRemovePerson.emit(personId);
  }
}
