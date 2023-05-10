# Exercices:

# Utilisation des pipes de base (uppercase, lowercase, date, currency) :

Formatter les champs affichés au niveau de composant "TrainingListComponent"
"name", "startDate", "price"

* Utilisez les pipes "uppercase" afficher le nom de la formation en majuscules
* Utilisez les pipes "date" pour afficher date de début de la formation en format lisible par un humain.
* Utilisez les pipes "currency" pour afficher price de la formation en euros.

# Création de pipes personnalisés :

. Créer un pipe qui prend une chaîne entrée et transforme en majuscule le premier caractere de chacune de ses mots.

. Créez un pipe personnalisé appelé "summary" qui prend en entrée une
chaîne de caractères  (description) et retourne une version raccourcie de la chaîne, si
elle est supérieure à 50 caractères. Dans ce cas, la chaîne doit être
tronquée et se terminer par "..."

# Gestion des paramètres pour les pipes personnalisés :

. parametrer l'exercice précedent de telle qu'il prendre le nom max pour tronquer en parametres.

# Filtrer la liste de formations par leur nom

**_Instructions_**: Implémentez la méthode de filtrage faite précédent dans le composant listing
au niveau d'un nouveau filter displayedTraining.

# Generifier le filtre précedent pour filtrer par d'autre type de champs

**_Instructions_**: Implémentez la méthode de filtrage faite précédent dans le composant listing
au niveau d'un nouveau filter displayedTraining sur la base d'un champs donné en parametre .

# Bonus

# Trier la liste de formations par leur nom en utilisant des filtres

