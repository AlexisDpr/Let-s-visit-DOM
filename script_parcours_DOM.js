// Question 1
var elementsP = document.getElementsByTagName("p");

var nombreElementsP = elementsP.length;

console.log("Nombre d'éléments <p> : " + nombreElementsP);


// Question 2
var elementCoucou = document.getElementById("coucou");

if (elementCoucou) {
  var contenuTexte = elementCoucou.textContent;

  console.log("Contenu texte de l'élément #coucou : " + contenuTexte);
} else {
  console.log("L'élément #coucou n'existe pas.");
}


// Question 3
var elementsA = document.getElementsByTagName("a");

if (elementsA.length >= 3) {
  var urlTroisiemeElementA = elementsA[2].href;

  console.log("URL du troisième élément <a>: " + urlTroisiemeElementA);
} else {
  console.log("Il n'y a pas suffisamment d'éléments <a> dans la page.");
}


// Question 4
var elementsCompteMoi = document.getElementsByClassName("compte-moi");

var nombreElementsCompteMoi = elementsCompteMoi.length;

console.log("Nombre d'éléments avec la classe 'compte-moi': " + nombreElementsCompteMoi);


// Question 5
var listeOrdonnee = document.querySelector("ol");

var elementsCompteMoi = listeOrdonnee.querySelectorAll("li.compte-moi");

var nombreElementsCompteMoi = elementsCompteMoi.length;

console.log("Nombre d'éléments <li> dans une liste ordonnée avec la classe 'compte-moi': " + nombreElementsCompteMoi);


// Question 6
var divElement = document.querySelector("div");

var secondUlElement = divElement.querySelectorAll("ul")[1];

var premierLiCache = secondUlElement.querySelector("li:first-child");

var contenuLiCache = premierLiCache.textContent;

console.log("Contenu du premier élément <li> caché : " + contenuLiCache);

