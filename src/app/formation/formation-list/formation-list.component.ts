import { Component } from "@angular/core";

@Component({
  selector: 'mon-deuxieme-component',
  templateUrl:'formation-list.component.html'
})
export class FormationsList {
  data = 'Créer un pipe qui prend une chaîne entrée et transforme en majuscule le premier caractere de chacune de ses mots.';
  
  title = 'liste Formation';
  currentDate = new Date();
 trainings = [
    {
      nom: 'Formation Angular Débutant', date: '15/02/2023', heure: '18h', url:
        "https:team.com", format: "enligne", hidden: false
    },
    {
      nom: 'Formation Angular Avancé', date: '15/06/2023', heure: '18h', lieu: {
        adresse:
          'adresse-1', ville: 'ville-1', pays: 'pays-1'
      }, format: "sursite", hidden: false
    },
    {nom: 'AWS', date: '15/04/2023', heure: '18h', hidden: false}
  ];
  toggleAll() {
   this.trainings.forEach(item => {
        item.hidden = !item.hidden;
    });
  }
  toggle(nom:any) {
    this.trainings.filter(it=>it.nom === nom).forEach(item => {
      if (item.nom === nom)
        item.hidden = !item.hidden;
    });
  }
 
  
}