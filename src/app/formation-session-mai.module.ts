import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormationSessionMaiComponent } from './app-formation-session-mai.component';
import { FormationView } from './formation/formation-view/formation-view.component';
import { FormationsList } from './formation/formation-list/formation-list.component';
import { HightlightDirective } from './shared/directives/highligh/highligh.directive';
import { ConfirmDirective } from './shared/directives/confirm.directive';

@NgModule({
  declarations: [
    //composants
    FormationSessionMaiComponent, FormationView, FormationsList,
    //directives
    HightlightDirective, ConfirmDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FormationSessionMaiComponent]
})
export class FormationManagerModule { }
