import { Person } from './../models/person';
import { Filter } from './../models/filter';
import { Action } from '@ngrx/store';

export const FILTER_ALL              = 'FILTER_ALL',
             FILTER_ATTENDING        = 'FILTER_ATTENDING',
             FILTER_ATTENDING_GUESTS = 'FILTER_ATTENDING_GUESTS';

export const filter = (state: (person) => Person, action: Action): Filter => {
  switch (action.type) {
    case FILTER_ALL:
      return (person: Person) => person;
    case FILTER_ATTENDING:
      return (person: Person) => person.attending;
    case FILTER_ATTENDING_GUESTS:
      return (person: Person) => person.guests;
    default:
      return state;
  }
};

export function initialFilter(person: Person) { return person };
