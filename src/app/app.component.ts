import { Component } from '@angular/core';

@Component({
  selector: 'app-session-mai',
  templateUrl: 'mon-html.html',
  styleUrls: ['./app.component.css']
})
export class FormationSessionMaiComponent {
  title = 'Gestion des formation';

  maVariable = {
    name: 'React',
    startDate: '13/02/2023',
    endDate: '22/02/2023',
    time: '6am',
    location: {
      address: 'Rue de abdelkrim alkhatabi', city: 'la defense', country:
        'France'
    }
  };

  fct() {
    return 2;
  }

  maListe =
    [ { id: 1, name: 'name1' },
      { id: 2, name: 'name2' },
      { id: 3, name: 'name3' },
      { id: 4, name: 'name4' }
    ];

}
