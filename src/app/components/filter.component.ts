import { Component, Output, EventEmitter } from '@angular/core';

import {
  FILTER_ALL,
  FILTER_ATTENDING,
  FILTER_ATTENDING_GUESTS
} from '../reducers/filter';

@Component({
  selector: 'party-filter',
  template: `
  <select (change)="onFilter.emit($event)">
    <option *ngFor="let filter of filters" [value]="filter.action">{{filter.name}}</option>
  </select>
  `
})
export class PartyFilterComponent {
  @Output() onFilter = new EventEmitter<string>();

  private filters = [
    { name: 'All', action: FILTER_ALL },
    { name: 'Attending', action: FILTER_ATTENDING },
    { name: 'Attending with guests', action: FILTER_ATTENDING_GUESTS }
  ];
}
