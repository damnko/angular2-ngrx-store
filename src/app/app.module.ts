import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { PersonInputComponent, PersonListComponent, PeopleStatsComponent, PartyFilterComponent } from './components';
import { people } from './reducers/people';
import { filter, initialFilter } from './reducers/filter';
import { TestEffects } from './effects';

@NgModule({
  declarations: [
    AppComponent,
    PersonInputComponent,
    PersonListComponent,
    PeopleStatsComponent,
    PartyFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // this will change https://github.com/ngrx/store/issues/376
    StoreModule.provideStore({ people, filter }, { people: [], filter: initialFilter }),
    EffectsModule.run(TestEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
