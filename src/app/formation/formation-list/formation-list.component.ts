import { Component } from "@angular/core";

@Component({
  selector: 'mon-deuxieme-component',
  templateUrl:'formation-list.component.html'
})
export class FormationsList {
  title = 'liste Formation';
 trainings = [
    {nom:'Formation Angular Débutant', date: '15/02/2023', heure: '18h', url:"https:team.com"},
    {nom:'Formation Angular Avancé', date: '15/06/2023', heure: '18h', lieu: {adresse: 'adresse-1', ville: 'ville-1', pays: 'pays-1'}},
    {nom:'AWS', date: '15/04/2023', heure: '18h'}
]
}