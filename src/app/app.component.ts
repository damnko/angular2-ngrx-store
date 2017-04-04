import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Person, AppState } from './models';

import {
  ADD_GUEST,
  ADD_PERSON,
  REMOVE_GUEST,
  REMOVE_PERSON,
  TOGGLE_ATTENDING } from './reducers/people';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people$: Observable<Person[]>;
  startId: number = Math.floor(Math.random() * (5000));

  constructor(private store: Store<AppState>) {
    this.people$ = store.select('people');
  }

  addGuest(personId: number): void {
    this.store.dispatch({
      type: ADD_GUEST,
      payload: personId
    });
  }

  removeGuest(personId: number): void {
    this.store.dispatch({
      type: REMOVE_GUEST,
      payload: personId
    });
  }

  toggleAttending(personId: number): void {
    this.store.dispatch({
      type: TOGGLE_ATTENDING,
      payload: personId
    });
  }

  addPerson(name: string): void {
    this.store.dispatch({
      type: ADD_PERSON,
      payload: {
        id: this.startId++,
        name,
        attending: false,
        guests: 0
      }
    });
  }

  removePerson(personId: number): void {
    this.store.dispatch({
      type: REMOVE_PERSON,
      payload: personId
    });
  }
}
