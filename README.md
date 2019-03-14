# Capture It 

Capture It est une application Android open source qui permet de collecter, commenter et sauvegarder des expériences d’apprentissage à travers des images compilées dans un journal personnel.

## Bien débuter

Ces instructions vont vous permettre de récupérer une copie du projet sur votre machine locale afin de permettre le développement ainsi que différents tests. Veuillez voir les notes relatives au déploiement pour voir comment déployer le projet sur Internet.

### Prérequis

Qu'est ce que l'utilisateur a besoin d'installer et comment les installer
Pour commencer, vous aurez besoin d'installer le framework Apache Cordova, pour pouvoir récupérer le code et le faire tourner sur un téléphone mobile Android.
Pour pouvoir utiliser Apache Cordova pour la plateforme Android, il faut installer:
-Node.js
-JDK (Java Develeopment Kit)
-SDK Android 
-Apache Ant



### Installation (N.B: Les installations suivantes sont relatives au système d'exploitation Windows 10)


Pour installer Node.js: 
-Allez sur le site nodejs.org 
-Cliquez sur "Install" (Cela installe automatiquement la version compatible avec votre système d'exploitation)
-Ouvrez le fichier.exe téléchargé et cliquer plusieurs fois sur Next après install
-Une fois l'installation finie, ouvrez le terminal pour installer cordova

Pour installer Cordova:
-Tapez dans le terminal la commande: npm install -g cordova et puis Entrée et laissez tourner
- Pour vérifier la version installée, tapez: cordova --version

Pour installer le JDK:
- Allez sur le site https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
-Dans la liste qui s'affiche prenez la version qui correspond à votre système d'exploitation (dans mon cas c'est: Windows x64)
-Double-cliquez sur le fichier téléchargé, après "next" jusqu'à la fin du téléchargement
-Allez dans le dossier de téléchargement jusqu'au fichier bin et copier le chemin (Java\jdk..\bin par exemple) et l'ajouter à la variable PATH de votre système

Pour installer le SDK Android:
- Allez sur le site https://developer.android.com/studio
- Descendez en bas de la page et appuyez sur le SDK tools package de Windows.
-Vous aurez un fichier adt-bundle-windows.., vous l'ouvrez et vous déplacez les fichiers qu'il y a dedans dans un autre dossier que vous créez (qui s'appellera Android par exemple)
-Vous copiez les 2 chemins de "tools" et "platform-tools"c(dans le dossier sdk)et vous les rajoutez à la variable PATH de votre système.

Pour installer Apache Ant:
-Allez sur le site https://ant.apache.org/
-Cliquez sur https://ant.apache.org/bindownload.cgi
-Récupérez après le fichier .zip
-Dé-zipper le fichier téléchargé, allez dans le dossier "bin" et ajouter son chemin au PATH du système


Pour vérifier que tout était bien installé:
-Ouvrez un nouveau terminal (après avoir fermé toutes les instances de terminaux ouvertes)
-Pour vérifier que Ant est bien installé, tapez:
		ant --version
=> ceci retourne une liste d'informations, pas d'erreurs.

-Pour vérifier qu'Android marche bien tapez:
		adb --help
=> pas d'erreurs

Créer un projet Cordova:
-Ouvrer un terminal
-Allez dans le dossier où vous voulez créez le projet et tapez: cordova create DossierApp fr.nomdedomaine.nomprojet NomApp


Ajouter la plateforme Android:
-Tapez dans un terminal:
		cordova platforms add android


## Exécuter des tests

Pour pouvoir tester le projet (l'application) sur votre téléphone Android. Il faut activer le mode développeur sur le téléphone.
Pour faire ceci allez dans paramètre> À propos de l'appareil > Appuyer plusieurs fois sur la case "Numéro de build" (jusqu'à l'affichage du message "Vous êtes maintenant développeur")

Une fois le mode développeur activé il y a un nouveau sous-menu "Options pour les développeurs"qui apparait en bas de la page "paramètres", là activez le "USB debugging".

Pour vérifiez que votre ordinateur détecte bien votre téléphone:
-Connectez le téléphone à votre ordinateur avec un câble USB.
-Ouvrer un terminal dans le dossier de l'application et tapez la commande: 
		adb devices
Ceci affichera la liste des appareils connectés (sous forme de numéro de série).




## Deploiement

Pour déployer l'application sur le téléphone Android:
-connectez le téléphone via un câble USB avec l'ordinateur et acceptez sur votre téléphone l'échange avec l'ordinateur.
-allez dans le dossier de l'application et tapez:
		cordova build android
-une fois que le message "BUILD SUCCESSFUL" s'affiche, tapez la commande:
		cordova run android
-Laissez le tourner, après vous aurez le message "LAUNCH SUCCESS" et l'application se lancera sur votre téléphone!

## Coder avec

* CSS
* HTML
* JAVASCRIPT


## Auteurs

* **Ghada AOUICHAOUI** - *ghada.aouichaoui@imt-atlantique.net* 


## License

Ce projet est enregistré sous une license OPEN SOURCE

