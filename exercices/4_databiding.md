# Exercices:

## Cacher/Afficher des élémennts en utilisant la propriété binding et l'event binding
**_Instructions_**:
* Cacher ou Afficher toute les farmation  au clique sur une button (Cacher tout /Afficher tout)
* Cacher ou Afficher une formation au clique sur le details d'une formation (ajouter une button pour chaque formation avec le label Cacher/Afficher ou 'Expand/Collapse'

``` js
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

```
 

## Filtrer les elements de la liste en utilisant le binding bidirectionnel

**_Instructions_**: Filrer la liste des formations en saisissant une partie de nom de formation dans un input
en utilisant ngModel
