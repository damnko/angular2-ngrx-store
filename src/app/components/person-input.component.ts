import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'person-input',
  template: `
  <input type="text" #personInput/>
  <button (click)="addPerson(personInput.value)">Add person</button>
  `
})
export class PersonInputComponent {
  @Output() onAddPerson = new EventEmitter<string>();
  addPerson(name: string): void {
    this.onAddPerson.emit(name);
  }
}
