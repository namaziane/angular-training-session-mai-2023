# Exercices

## Répétition de données avec ngFor

***Instructions***: Créez un composant **training-list** pour afficher
la liste des formations (tableau ci-dessous) qui sont stockées dans le
composant pour le moment.

``` js
trainings = [
    {nom:'Formation Angular Débutant', date: '15/02/2023', heure: '18h', url:"https:team.com"},
    {nom:'Formation Angular Avancé', date: '15/06/2023', heure: '18h', lieu: {adresse: 'adresse-1', ville: 'ville-1', pays: 'pays-1'}},
    {nom:'AWS', date: '15/04/2023', heure: '18h'}
]
```

## Améliorons notre composant training-list

**Instructions** : Améliorez le composant "trainings-list"

  - afficher le message "En ligne" pour les formations en ligne qui
    n’ont pas de localisation physique, et

  - afficher le message "Sur site" pour les formations qui ont une
    localisation mais pas d’URL en ligne.

  - De plus, cachez complètement les éléments de localisation et d’URL
    en ligne pour les formations qui n’ont pas ces données.

<!-- end list -->

``` js
trainings = [
    {nom:'Formation Angular Débutant', date: '15/02/2023', heure: '18h', url:"https:team.com"},
    {nom:'Formation Angular Avancé', date: '15/06/2023', heure: '18h', lieu: {adresse: 'adresse-1', ville: 'ville-1', pays: 'pays-1'}},
    {nom:'AWS', date: '15/04/2023', heure: '18h'}
]
```

## Utiliser ngSwitch pour améliorer la lisibilité de code

**Instructions** : Certains des formations affichés dans le composant
trainings-list ne sont que en ligne , d’autres sont en physique,
d’autres n’ont ni l’un ni l’autre, mais il n’y a pas de formations qui
ont les deux.

``` js
  trainings = [
    {nom:'Formation Angular Débutant', date: '15/02/2023', heure: '18h', url:
        "https:team.com", format:"enligne"},
    {nom:'Formation Angular Avancé', date: '15/06/2023', heure: '18h', lieu: {adresse:
          'adresse-1', ville: 'ville-1', pays: 'pays-1'},  format:"sursite"},
    {nom:'AWS', date: '15/04/2023', heure: '18h'}
  ]
```

## Changer l’apparence de nom des formation en fonction de son format en utilisant ngClass ou ngStyle

**Instructions** : Utiliser la directive ngClass/ngStyle pour ajouter
des classes/styles de manière conditionnelle au nom de la formation en
fonction de la valeur de training.format Changer la coleur de texte ou
de fond.

## Créer une directive pour changer l’apparence d’un element HTML

**Instructions** : Créez une nouvelle directive personnalisée appelée
"appHighlight" qui change la couleur de fond d’un élément lorsqu’il est
survolé par la souris. Utilisez cette directive sur un element de votre
choix.

## Créer une directive pour changer le comportement d’un element HTML

**Instructions** Créez une directive personnalisée appelée "appConfirm"
qui affiche une fenêtre de confirmation lorsqu’un bouton est cliqué.
Supposons que le lien amene vers google.com si la confirmation est
validée.
