import { percentAttending } from './selectors/index';
import { Filter } from './models/filter';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/let';

import { Person, AppState } from './models';
import { partyModel, attendees } from './selectors';

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
  filter$: Observable<Filter>;
  model$: Observable<any>;
  startId: number = Math.floor(Math.random() * 5000);
  percent: Observable<number>;

  constructor(private store: Store<AppState>) {
    // select applies map + distinctUntilChanged behind the scenes
    // and returns only the selected slice of the app state/store
    this.people$ = store.let(attendees);
    this.filter$ = store.select('filter');
    this.model$ = Observable.combineLatest(
      this.people$,
      this.filter$,
      (people, filter) => { return { people, filter }; }
    ).let(partyModel);
    this.percent = percentAttending(store);
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

  filterPeople(ev: any): void {
    this.store.dispatch({
      type: ev.target.value
    });
  }
}
