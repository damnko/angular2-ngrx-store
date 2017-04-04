import { Action } from '@ngrx/store';
import { AppState, Person } from '../models';

// these will be used as our actions identifiers
export const ADD_PERSON       = 'ADD_PERSON',
             REMOVE_PERSON    = 'REMOVE_PERSON',
             ADD_GUEST        = 'ADD_GUEST',
             REMOVE_GUEST     = 'REMOVE_GUEST',
             TOGGLE_ATTENDING = 'TOGGLE_ATTENDING';

// helper function
const changeGuest = (state: Person[], action: Action) => {
  return state.map(person => {
    if (person.id === action.payload) {
      switch (action.type) {
        case ADD_GUEST:
          // I cannot change the person.guests parameter directly by doing person.guests++
          // because it will change the original state object and it will throw an error
          return Object.assign({}, person, {guests: person.guests + 1});
        case REMOVE_GUEST:
          return Object.assign({}, person, {guests: person.guests - 1});
        case TOGGLE_ATTENDING:
          return Object.assign({}, person, {attending: !person.attending});
        default:
          return person;
      }
    }
    return person;
  });
};

// people reducer
// takes as argument a slice of the state, the one that contains the people information
export const people = (state: Person[] = [], action: Action): Person[] => {
  switch (action.type) {
    case ADD_PERSON:
      return [
        ...state,
        { id: action.payload.id, name: action.payload.name, guests: 0, attending: false }
      ];
    case REMOVE_PERSON:
      return state.filter(person => person.id !== action.payload);
    case ADD_GUEST:
    case REMOVE_GUEST:
    case TOGGLE_ATTENDING:
      return changeGuest(state, action);
    default:
      return state;
  }
};
