// Modification n°1
function changeTitles() {
    var mainTitle = document.querySelector('.jumbotron h1');
    mainTitle.textContent = "Ce que j'ai appris à THP";
  
    var subTitle = document.querySelector('.jumbotron p.lead');
    subTitle.textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
  }
  
  changeTitles();
  

  // Modification n°2
  function changeCallToActions() {
    // Changer le texte du bouton "Main call to action"
    var mainCTAButton = document.querySelector('.jumbotron .btn-primary');
    mainCTAButton.textContent = "OK je veux tester !";
  
    // Ajouter l'URL vers laquelle le bouton "Main call to action" va pointer
    mainCTAButton.setAttribute('href', 'http://www.thehackingproject.org');
  
    // Changer le texte du bouton "Secondary action"
    var secondaryCTAButton = document.querySelector('.jumbotron .btn-secondary');
    secondaryCTAButton.textContent = "Non Merci";
  
    // Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer
    secondaryCTAButton.setAttribute('href', 'https://www.pole-emploi.fr/accueil/');
  }
  
  changeCallToActions();
  

  // Modification n°3
  function changeLogoName() {
    var logoTitle = document.querySelector('.navbar-brand');
  
    logoTitle.textContent = "The THP Experience";
  
    logoTitle.style.fontSize = "2em";
  }
  
  changeLogoName();


  // Modification n°4
  function populateImages() {
    let imagesArray = [
      "https://img.icons8.com/color/480/000000/html-5.png",
      "https://img.icons8.com/color/480/000000/css3.png",
      "https://img.icons8.com/color/480/000000/javascript.png",
      "https://img.icons8.com/color/480/000000/ruby-programming-language.png",
      "https://img.icons8.com/color/480/000000/bootstrap.png",
      "https://img.icons8.com/color/480/000000/github.png",
      "https://i.imgur.com/bJE9Pka.png",
      "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4",
      "https://img.icons8.com/color/480/000000/heroku.png"
    ];
  
    var cards = document.querySelectorAll('.card');
  
    // Parcourir les cards et ajouter les images correspondantes
    for (var i = 0; i < cards.length; i++) {
      // Créer un élément <img>
      var image = document.createElement('img');
  
      // Définir l'attribut src avec l'URL de l'image correspondante
      image.src = imagesArray[i];
  
      // Ajouter la classe 'card-img-top' pour afficher l'image correctement dans la card
      image.classList.add('card-img-top');
  
      // Ajouter l'élément <img> à la card actuelle
      cards[i].appendChild(image);
    }
  }
  
  populateImages();


  // Modification n°5
  function deleteLastCards() {
    var cards = document.querySelectorAll('.card');
  
    // Déterminer l'index à partir duquel supprimer les cards
    var startIndex = cards.length - 3;
  
    // Vérifier si l'index de départ est valide
    if (startIndex >= 0) {
      // Parcourir les cards à partir de l'index de départ jusqu'à la fin
      for (var i = startIndex; i < cards.length; i++) {
        cards[i].remove();
      }
    }
  }
  
  deleteLastCards();


  // Modification n°6
  function changeCardsText() {
    var newCardTexts = [
      "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
      "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
      "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
    ];
  
    // Sélectionner les 3 premières cards
    var cards = document.querySelectorAll('.card');
  
    if (cards.length >= newCardTexts.length) {
      // Parcourir les 3 premières cards
      for (var i = 0; i < newCardTexts.length; i++) {
        
        cards[i].querySelector('.card-text').textContent = newCardTexts[i];
      }
    }
  }
  
  changeCardsText();
  
  

  