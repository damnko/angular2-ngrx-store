import { ADD_PERSON } from './../reducers/people';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/do';

@Injectable()
export class TestEffects {
  // this side effect will be triggered when an action of type ADD_PERSON
  // will be dispatched
  // Use { dispatch: false } if the effect's intention is not to cause new actions to enter the stream
  // otherwise store-devtools will throw an error
  @Effect({ dispatch: false }) effect = this.actions$.ofType(ADD_PERSON)
    .map(action => action.payload)
    .do(payload => console.log('effect triggered', payload));

  constructor(private actions$: Actions) {}

}
