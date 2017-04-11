import { Store } from '@ngrx/store';
import 'rxjs/add/operator/distinctUntilChanged';

import { AppState } from './../models/app-state';

export const partyModel = state => state.map(({ people, filter }) => {
    return {
      invited: people.length,
      people: people.filter(filter),
      attending: people.filter(person => person.attending).length,
      guests: people.reduce((curr, next) => curr + next.guests, 0)
    };
  });

export const attendees = (store: Store<AppState>) => {
  return store.map(state => state.people)
    .distinctUntilChanged();
};

export const percentAttending = store => store.let(attendees)
  .map(people => {
    const nrAttending = people.filter(person => person.attending).length;
    const nrTotal = people.length;
    return nrTotal === 0 ? 0 : (nrAttending / nrTotal) * 100;
  })
