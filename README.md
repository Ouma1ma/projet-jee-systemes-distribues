# projet-jee-systemes-distribues
\
L'objectif est de créer une application web permettant de gérer les factures des clients en se basant sur une architecture microservices et la sécuriser. 
Elle est composée de trois microservices:
1. Customer-service: chargé de gérer les clients.
2. Product-service: gère les produits.
3. Billing-service: consacré pour la gestion des factures.
\
Nous nous sommes servis de la **Spring cloud Gateway** pour configurer le routage de manière dynamique, **Eureka discovery service** pour localiser les instances des services et **Keycloack** pour la partie sécurité de l'application.
\
L'architecture de l'application:
\
![architecture-app](https://user-images.githubusercontent.com/72311680/219970382-b359cd36-599a-4c0a-bdc0-d1b60bd116a3.png)
\
## Création des microservices
1. **Customer-service**
- L'entité Customer:
\
![customer](https://user-images.githubusercontent.com/72311680/209382435-5a2d427d-9df6-46fe-91f6-42321497ba55.PNG)

- L'interface CustomerRepository:
\
![customer repository](https://user-images.githubusercontent.com/72311680/209383083-5aa43b76-cbf5-48a6-bd8b-6137047c84be.PNG)

- Test du microservice:
\
![test customer ms](https://user-images.githubusercontent.com/72311680/209385092-bb4bea43-f7b2-4fc7-9663-dbcb93dc7aa1.PNG)

2. **Product-service**
- L'entité Product:
\
![produit](https://user-images.githubusercontent.com/72311680/209386114-e7891001-5a3f-4f73-9392-683bc326a7ec.PNG)

- L'interface ProductRepository:
\
![produit repository](https://user-images.githubusercontent.com/72311680/209387410-35614dde-6696-4f4e-a2e1-5d1915a95457.PNG)

- Test du microservice:
\
![test produit ms](https://user-images.githubusercontent.com/72311680/209387692-f7c63145-edf9-4974-b636-a8ba48c3ed36.PNG)

#### Les API Restful des deux microservices customer-service et product-service sont déployées en utilisant **Spring Data Rest**! 

3. **Billing-service**
- L'entité Bill:
\
![bill](https://user-images.githubusercontent.com/72311680/209388299-ea659ec8-f6fc-4d56-8d36-a8da53f0e004.PNG)

- L'interface BillRepository:
\
![bill repository](https://user-images.githubusercontent.com/72311680/209389281-08b6870b-6d3a-430c-91b1-1dc237628d21.PNG)

- BillController:
\
![bill controller 1](https://user-images.githubusercontent.com/72311680/209393378-d441ec4f-d011-46cf-a374-762a4a1b3b53.PNG)
![bill controller 2](https://user-images.githubusercontent.com/72311680/209393387-0fd5ac94-0242-4374-bd55-8ef4f73c227a.PNG)

- BillProjection:
\
![Bill projection](https://user-images.githubusercontent.com/72311680/209393627-41e01f37-6077-45ae-9cd4-358989154287.PNG)

- Le Modèle Customer:
\
![customer modele](https://user-images.githubusercontent.com/72311680/209393880-1bbf6580-e31f-418c-a160-0195f70e12f9.PNG)

- CustomerRestClient:
\
![open feign customer](https://user-images.githubusercontent.com/72311680/209394018-40012b9d-3b38-4783-89a5-f4d1b2817da7.PNG)

- Le Modèle Product:
\
![product modele](https://user-images.githubusercontent.com/72311680/209395703-8846af90-86c6-4264-8e09-aee8940a20d1.PNG)

- L'entité ProductItem:
\
![product Item](https://user-images.githubusercontent.com/72311680/209394934-9674f9f9-8a6f-4033-81d6-8d4a2628a9e5.PNG)

- ProductItemRepository:
\
![product item repository](https://user-images.githubusercontent.com/72311680/209395465-645ec404-6697-4872-8631-5c820c0504fe.PNG)

- ProductItemRestClient:
\
![open feign product item](https://user-images.githubusercontent.com/72311680/209395067-3592680c-cffd-4998-9237-74094e52b7ec.PNG)

- Test du microservice:
\
![test billing 1](https://user-images.githubusercontent.com/72311680/209389734-aecd0164-5621-40ac-b4a9-72da05abcdde.PNG)
![test billing 2](https://user-images.githubusercontent.com/72311680/209389757-d3d410d4-6359-404b-a544-80c7919bd628.PNG)

## Création du Gateway Service
![gateway](https://user-images.githubusercontent.com/72311680/209391745-da50c721-ddcc-49e0-b05a-905111bc14ee.PNG)
\
- Configuration du routage de manière statique:
\
![config statique](https://user-images.githubusercontent.com/72311680/209396856-65b6f139-51e0-449b-8a1c-324c04099630.PNG)

- Configuration du routage de manière dynamique:
\
![config dynamique gateway](https://user-images.githubusercontent.com/72311680/209391994-4a174aff-5961-4981-aece-81bb00b87773.PNG)

## Création de l'annuaire Eureka Discovery Service
![eureka](https://user-images.githubusercontent.com/72311680/209392359-771122ad-2902-4114-9ace-ca0f1d37acda.PNG)

- Configuration dynamique de la gestion des routes vers les micro services enregistrés dans l’annuaire Eureka Server:
![config eureka customer](https://user-images.githubusercontent.com/72311680/209392685-c24f59de-2404-4224-843d-cd38a847a582.PNG)
![config eureka inventory](https://user-images.githubusercontent.com/72311680/209392696-da5836be-f364-4cf8-bce0-3c3f6cb25f7a.PNG)
![config eureka billing](https://user-images.githubusercontent.com/72311680/209392712-444577e6-86e2-413a-9474-0f508fa99731.PNG)
![config eureka gateway](https://user-images.githubusercontent.com/72311680/209392720-e690a765-87cb-4288-a4e0-aa6da29ec985.PNG)

## Création du Client Angular
- Affichage de la liste des clients:
\
![liste-clients](https://user-images.githubusercontent.com/72311680/219972178-7e0a79c8-c00f-48a2-9a40-9e3b57cf3911.png)

- Affichage de la liste des produits:
\
![liste-produits](https://user-images.githubusercontent.com/72311680/219972142-ad84b196-7297-44a1-a028-8160072ee586.png)

- Affichage de la liste des factures:
\
![liste-factures](https://user-images.githubusercontent.com/72311680/219972272-6520569e-13c7-425f-94f3-69754688c763.png)

- Affichage du détail de chaque facture:
\
![detail bill](https://user-images.githubusercontent.com/72311680/209398076-ad188d15-5e2d-47ef-b69b-ba0350636014.PNG)

## Sécurisation de l'application avec Keycloack
- Création du Realm:
\
![realm](https://user-images.githubusercontent.com/72311680/219970761-0de473ec-5f73-4b58-8b60-72cfcceeae08.png)

- Création des clients à sécuriser:
\
![clients-to-secure](https://user-images.githubusercontent.com/72311680/219970832-aa61b9ce-ce14-4002-b158-2c11efb0954d.png)

- Création des utilisateurs:
\
![users](https://user-images.githubusercontent.com/72311680/219970901-39c63850-f6da-41e3-b404-ee6f37d98298.png)

- Création des rôles:
\
![roles](https://user-images.githubusercontent.com/72311680/219970928-4f6d7704-c0a5-4c50-9f22-f3b4acccd8b5.png)

- Affectation des rôles aux utilisateurs:
\
![affectation-roles1](https://user-images.githubusercontent.com/72311680/219970974-07869eb3-4bba-4c1e-b9a2-59ff3d3e51c2.png)
![affectation-roles2](https://user-images.githubusercontent.com/72311680/219971000-b377b140-896b-4046-825b-064fa547d822.png)
![affectation-roles3](https://user-images.githubusercontent.com/72311680/219971015-f9db0d27-ef38-4ab3-a35a-cd55decdc983.png)

## Tests des modes d'authentification
1. Authentification avec mot de passe:
\
![login with password](https://user-images.githubusercontent.com/72311680/209400133-f6a3cadb-1f88-453f-8807-e2f76e0255fe.PNG)
  - access Token:
\
![ACCESS TOKEN](https://user-images.githubusercontent.com/72311680/209400334-1fc809a6-1d46-4106-8560-61723082874a.PNG)
  - refresh Token:
\
![REFRESH TOKEN](https://user-images.githubusercontent.com/72311680/209400349-c1a1699a-eeeb-4452-8466-d04771b457b4.PNG)

2. Authentification avec le Refresh Token:
\
![login with refresh token](https://user-images.githubusercontent.com/72311680/209400882-2c9571a3-4408-4c55-b654-1bc3cd43edec.PNG)
  - access Token:
\
![access token 2](https://user-images.githubusercontent.com/72311680/209401015-8f8e3aaa-ad05-4c09-8bec-2fac204fe4d2.PNG)
  - refresh Token:
\
![refresh token 2](https://user-images.githubusercontent.com/72311680/209401030-3c1c9567-921c-4b7f-a09f-001c57135daf.PNG)

3. Authentification avec le ClientID:
\
![client id auth](https://user-images.githubusercontent.com/72311680/209401290-f96e701b-2753-4b15-9f26-ef5564c9cd77.PNG)

## Sécurisation des microservices:
Les microservices à sécuriser:
- customer-service
- inventory-service
- billing-service

=>Sécurisation du microservice Product-service:
1.la classe de configuration KeycloakSecurityConfig:
\
![sec-config-class](https://user-images.githubusercontent.com/72311680/219971230-31f61fa8-14a1-4341-bc45-e87750aae365.png)

2.la classe KeycloakAdapterConfig:
\
![keycloak-adapter-config](https://user-images.githubusercontent.com/72311680/219971298-af42a7b3-888f-4669-b4d1-dc34b093e233.png)

3. configuration des paramètres Keycloak dans le fichier application.properties:
\
![app-properties-file1](https://user-images.githubusercontent.com/72311680/219971429-ebe3dbf8-0923-4d75-9a1d-e75edb5cd1a3.png)
\

=>Sécurisation du microservice customer-service:
1.la classe de configuration KeycloakSecurityConfig:
\
![sec-config-class2](https://user-images.githubusercontent.com/72311680/219971492-f2a56b16-f73d-4b79-86e4-489d57358854.png)

2.la classe KeycloakAdapterConfig:
\
![keycloak-adapter-config](https://user-images.githubusercontent.com/72311680/219971298-af42a7b3-888f-4669-b4d1-dc34b093e233.png)

3. configuration des paramètres Keycloak dans le fichier application.properties:
\
![app-properties-file2](https://user-images.githubusercontent.com/72311680/219971518-189f4b26-fb5c-485b-ae15-b0b13a4b49f5.png)


=>Sécurisation du microservice billing-service:
1.la classe de configuration KeycloakSecurityConfig:
\
![sec-config-class3](https://user-images.githubusercontent.com/72311680/219971583-56dbbbce-6987-488b-ab91-76414adaf02a.png)

2.la classe KeycloakAdapterConfig:
\
![keycloak-adapter-config](https://user-images.githubusercontent.com/72311680/219971298-af42a7b3-888f-4669-b4d1-dc34b093e233.png)

3. configuration des paramètres Keycloak dans le fichier application.properties:
\
![app-properties-file3](https://user-images.githubusercontent.com/72311680/219971630-41514be3-a20e-4bb5-8582-fce215ab11be.png)

## Sécurisation de l'application Angular:
- création de SecurityService:
\
![sec-service](https://user-images.githubusercontent.com/72311680/219971757-fe2a83b2-5c28-4ee8-affe-2d549c5ce4ed.png)

- création de AuthGuard class:
\
![guards](https://user-images.githubusercontent.com/72311680/219972001-5b7572a5-ade5-4db8-85bb-9ab0bc089210.png)

- ajout des méthodes de login et logout:
\
![auth-methods](https://user-images.githubusercontent.com/72311680/219972072-f3235498-7044-4073-8421-426bdd6723f3.png)

- Ajout de la fonctionnalité d'authentification:
\
![nav](https://user-images.githubusercontent.com/72311680/219971866-c8924bba-3adc-4ad5-8d92-2835f82376c1.png)

- Formulaire d'authentification:
\
![login-form](https://user-images.githubusercontent.com/72311680/219972235-4a327d39-45c3-4b72-8afa-2ce2ef3c2643.png)

## Création du microservice Billing-supplier-service:

Il permet de produire aléatoirement des factures et de les publier dans le topic Kafka 'Bills_Topic'.
\
1. La création d'un producer de bills:
\
![producer](https://user-images.githubusercontent.com/72311680/219972446-55ae6e3f-207d-47cd-8768-80fcade6fc39.png)

2. configuration de requise dans le fichier application.properties:
\
![kafka-producer-config](https://user-images.githubusercontent.com/72311680/219972534-bc5a3a1b-b05f-4a74-816c-72a5438a6c47.png)

3.création du producer :
\
il permet de consommer les factures publiées dans le topic par le microservice Billing et les enregistrer dans la base de données.
\
![kafka-consumer-class](https://user-images.githubusercontent.com/72311680/219972633-dbf6d21c-302d-44ac-b53a-4925baac947e.png)

