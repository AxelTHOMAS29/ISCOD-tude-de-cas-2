//document.body.onload = addElement;
let accueilList = ["bonjour", "test", "test",];
let produitList = [];
let contactList = [];


function addElement() {
    // crée un nouvel élément div
    var newDiv = document.createElement("ul");
    // et lui donne un peu de contenu
    var newContent = document.createTextNode("Hi there and greetings!");
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);

    // ajoute le nouvel élément créé et son contenu dans le DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

class Accueil {
    label;
    esp;
    disp;
    constructor(label = [], esp = 20, disp = 0) {
        this.label = label;
        this.esp = esp;
        this.disp = disp;
    }
    createAcceuil() {
        //console.log(`${this.label}` + " embauche " + `${this.label}` + `${this.esp}` + `${this.disp}`);
        // crée un nouvel élément div
        var newUl = document.createElement("ul");
        this.label.forEach(element => {
            var newDiv = document.createElement("li");
            var newContent = document.createTextNode(element);
            // ajoute le nœud texte au nouveau div créé
            newDiv.appendChild(newContent);

            // ajoute le nouvel élément créé et son contenu dans le DOM
            var currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
        });
    }
}

function testa() {
    let newAccueil = new Accueil(accueilList)
    newAccueil.createAcceuil()
}

let newAccueil = new Accueil([" bonjour ", " test ", "test"])
//newAccueil.createAcceuil()

function addArray(v) {
    accueilList.push(v);
    //console.log(accueilList)
}

class Menu {
    label;
    esp;
    disp;
    constructor(label = [], esp = 20, disp = 0) {
        this.label = label;
        this.esp = esp;
        this.disp = disp;
    }
    getObjDOM() {
        //console.log(`${this.label}` + " embauche " + `${this.label}` + `${this.esp}` + `${this.disp}`);
        // crée un nouvel élément
        var currentDiv = document.getElementById("div1");
        var HTMLUListElement = document.createElement("ul");
        document.body.insertBefore(HTMLUListElement, currentDiv);

        this.label.forEach(element => {
            var HTMLIElement = document.createElement("li");
            var newContent = document.createTextNode(element);
            // ajoute le texte
            HTMLIElement.appendChild(newContent);

            // ajoute le nouvel élément créé et son contenu dans le DOM
            document.body.insertBefore(HTMLIElement, currentDiv);
            
        });
    }
}

let labels = ["Accueil", "Produits", "Contact"];

let menu = new Menu(labels);

let menuObj = menu.getObjDOM();
menuObj.addEventListener("DOMContentLoaded", evt =>

    console.log(`Clic sur ${labels[evt.detail.index]}`));
out.appendChild(menuObj);

//setTimeout(() => menu.setEsp(100).setDisp(1).addItem('Test'), 5000);