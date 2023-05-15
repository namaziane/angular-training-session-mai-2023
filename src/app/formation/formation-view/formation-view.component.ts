import { Component } from "@angular/core";

@Component({
  selector: 'mon-premier-component',
  templateUrl:'formation-view.component.html'
})
export class FormationView {
  titre = 'VIEW FORMATION';
  formation = {
    name: 'React',
    startDate: '13/02/2023',
    endDate: '22/02/2023',
    time: '6am',
    location: {
      address: 'Rue de abdelkrim alkhatabi', city: 'la defense', country:
        'France'
    }
  };

}