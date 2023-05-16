import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormationSessionMaiComponent } from './app-formation-session-mai.component';
import { FormationView } from './formation/formation-view/formation-view.component';
import { FormationsList } from './formation/formation-list/formation-list.component';
import { HightlightDirective } from './shared/directives/highligh/highligh.directive';
import { ConfirmDirective } from './shared/directives/confirm.directive';
import { MMonUpperCase } from './shared/pipes/uppercase.pipe';
import { UppercaseFirstCaracter } from './shared/pipes/uppercase-first-caracter.pipe';
import { FormsModule } from '@angular/forms';
import { FormFilter } from './shared/pipes/formFilter';

@NgModule({
  declarations: [
    //composants
    FormationSessionMaiComponent, FormationView, FormationsList,
    //directives
    HightlightDirective, ConfirmDirective,
    //pipes
    MMonUpperCase, UppercaseFirstCaracter, FormFilter
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [FormationSessionMaiComponent]
})
export class FormationManagerModule { }
