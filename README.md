# Tournois RL (API)

## Contexte
Cette API s'inscrit dans un de mes projets de cours de l'année dernière. Je devais réaliser une application avec React qui consommait une API. Seulement voilà, ce projet (que ce soit l'application back avec l'API faite avec Laravel, ou l'application front avec React) était hébergé sur le serveur de mon IUT et cet été, tout mon espace a été supprimé, et (bien évidemment) je n'avais pas fait de copie du projet.

J'ai pu récupérer la partie front puisqu'elle était sur le git de mon université, seulement comme je n'avais pas utilisé git pour la partie API, celle-ci est définitivement perdue.

Ce pourquoi je profite de ce projet pour la refaire (:

## Fonctionnalités
L'application est composée de 3 CRUD : Un pour les joueurs, un pour les équipes, et un pour les tournois.

## Technologies utilisées
L'application a été réalisée avec Sails, un framework MVC pour Node.js.

## CI/CD
J'ai crée deux workflows : Un pour la "pré-production", et un pour la production.
Le premier se déclenche lors d'un "push" ou d'une PR sur la branche "pre-prod". Il installe les dépendances du projet et le déploie sur Heroku. Etrangement je n'ai pas besoin de build ou démarrer l'application dans le workflow, j'ai l'impression que Heroku s'en charge tout seul. La branche "pre-prod" est déployée à l'adresse suivante : https://tournois-rl-api-preprod.herokuapp.com/

Le second ne se déclenche que lors d'une PR sur la branche "main" (puisqu'en effet nous sommes censés ne jamais faire de push directement sur main) et pour le moment, il fait exactement la même chose, mais cette fois-ci à cette adresse : https://tournois-rl-api.herokuapp.com/
J'aurais aimé le déployer sur mon hébergement OVH, mais il faut un abonnement "Pro", ce qui n'est pas mon cas malheureusement.
