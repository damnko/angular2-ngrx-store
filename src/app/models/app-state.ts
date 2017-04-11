import { Person } from './person';
import { Filter } from './filter';

export interface AppState {
  people: Person[];
  filter: Filter;
}
