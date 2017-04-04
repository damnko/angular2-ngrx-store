import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PersonInputComponent, PersonListComponent } from './components';
import { people } from './reducers/people';

@NgModule({
  declarations: [
    AppComponent,
    PersonInputComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // this will change https://github.com/ngrx/store/issues/376
    StoreModule.provideStore({ people }, { people: [] })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
