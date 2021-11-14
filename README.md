# Tournois RL (API)

## Contexte
Cette API s'inscrit dans un de mes projets de cours de l'année dernière. Je devais réaliser une application avec React qui consommait une API. Seulement voilà, ce projet (que ce soit l'application back avec l'API faite avec Laravel, ou l'application front avec React) était hébergé sur le serveur de mon IUT et cet été, tout mon espace a été supprimé, et (bien évidemment) je n'avais pas fait de copie du projet.

J'ai pu récupérer la partie front puisqu'elle était sur le git de mon université, seulement comme je n'avais pas utilisé git pour la partie API, celle-ci est définitivement perdue.

Ce pourquoi je profite de ce projet pour la refaire (:

## Fonctionnalités
C'est une application pour organiser des petits tournois sur le jeu Rocket League. Elle est très basique : un utilisateur peut créer un tournoi, et ensuite d'autres utilisateurs peuvent inscrire leur équipe à ce tournoi, en précisant les joueurs qui feront partie de l'équipe.

L'API est donc simplement composée de 3 CRUD : Un pour les joueurs, un pour les équipes, et un pour les tournois.

## Technologies utilisées
L'application a été réalisée avec Sails, un framework MVC pour Node.js.

## CI/CD
J'ai créé deux workflows : Un pour la pré-production, et un pour la production. Le premier se déclenche lors d'un "push" ou d'une PR sur la branche "pre-prod", le second ne se déclenche que lors d'une PR sur la branche "main" (puisqu'en effet nous sommes censés ne jamais faire de push directement sur main).

Les deux worflows ont les mêmes étapes :

 * Installer les dépendances du projet
 * Lancer un test. En effet je n'étais pas sûre que le nombre d'étapes de mon workflow était suffisant au vu des consignes, j'ai donc essayé d'y ajouter un test (ce que je n'avais jamais fait dans aucune de mes précédentes applications).
 * Deployer l'application sur Heroku. C'est là la seule différence entre les workflows de pré-production et de production, l'adresse à laquelle le projet est déployé :
  * Pré-production : https://tournois-rl-api-preprod.herokuapp.com/
  * Production : https://tournois-rl-api.herokuapp.com/

Étrangement je n'ai pas besoin de build ou démarrer l'application dans le workflow, j'ai l'impression que Heroku s'en charge tout seul. De plus j'aurais aimé pouvoir déployer la version de production sur mon hébergement OVH, mais il faut un abonnement "Pro", ce qui n'est pas mon cas malheureusement.
