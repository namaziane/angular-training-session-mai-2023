import { Component, Input } from '@angular/core';

@Component({
  selector: 'formation-view',
  templateUrl:'formation-view.component.html'
})
export class FormationView {
  @Input()
  formation :any;
 @Input()
  nom: string = '';
}