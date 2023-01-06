class personne {
  constructor(nom, lieu, argent) {
    this.nom = nom;
    this.lieu = lieu;
    this.argent = argent;
    this.mainDroite = [];
    this.mainGauche = [];
  }
  seDeplacer = (lieu) => {
    this.lieu = lieu;
  };
  PayerArticle = (article) => {
    this.argent = this.argent - article;
  };
  couper = (ingredient, outils) => {
    if (outils.action == "couper") {
      ingredient.etat = "couper";
    }
  };
}
class ingredient {
  constructor(nom, prix) {
    this.nom = nom;
    this.prix = prix;
    this.etat = "entier";
  }
}
class outils {
  constructor(nom, action) {
    this.nom = nom;
    this.action = action;
  }
}

let panier = {
  type : "panier",
  contenu : []
}

let epicerie = {
  nom : "epicerie",
  personne : [],
  paniers : [],
  ingredient : [new ingredient ("ognion",10),new ingredient ("fromage",15), new ingredient ("epice",5),new ingredient ("oeuf",8)]
}

let maison = {
  nom : "maison",
  personne : [],
  frigo : []
}

let bol = {
  nom : "newMelange",
  contenu : [],
  melange : "pasCuit"
}

let poel = {
  tableu : [],
  cuire(){
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      
    }
  }
}