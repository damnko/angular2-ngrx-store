import { Component, Input } from '@angular/core';

@Component({
  selector: 'people-stats',
  template: `
  Invited: {{invited}} | Attending: {{attending}} | Guests: {{guests}}
  `
})
export class PeopleStatsComponent {
  @Input() invited: number;
  @Input() attending: number;
  @Input() guests: number;
}
