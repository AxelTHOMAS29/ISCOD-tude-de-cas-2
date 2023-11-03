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
        var HTMLUListElement = document.createElement("ul");
        HTMLUListElement.style.display = 'flex';
        if (`${this.disp}` == 0) {
            HTMLUListElement.style.flexDirection = 'row';
        } else {
            HTMLUListElement.style.flexDirection = 'column';
        }

        this.label.forEach((element, index) => {
            var HTMLIElement = document.createElement("li");
            var newContent = document.createTextNode(element);
            HTMLIElement.style.margin = `${this.esp}` + "px";
            HTMLIElement.appendChild(newContent);
            HTMLUListElement.appendChild(HTMLIElement);

            HTMLIElement.addEventListener('click', evt => {
                const customEvent = new CustomEvent('menu_click', { detail: { index } });
                HTMLUListElement.dispatchEvent(customEvent);
            });
        });

        return HTMLUListElement;
    }
    setEsp(esp) {
        this.esp = esp;
        var HTMLUListElement = document.createElement("ul");
        this.label.forEach((element, index) => {
            var HTMLIElement = document.createElement("li");
            var newContent = document.createTextNode(element);
            HTMLIElement.style.margin = `${this.esp}` + "px";
            HTMLIElement.appendChild(newContent);
            HTMLUListElement.appendChild(HTMLIElement);

            HTMLIElement.addEventListener('click', evt => {
                const customEvent = new CustomEvent('menu_click', { detail: { index } });
                HTMLUListElement.dispatchEvent(customEvent);
            });
        }); return HTMLUListElement;
    }
    setDisp(disp) {
        this.disp = disp;
        var HTMLUListElement = document.createElement("ul");
        HTMLUListElement.style.display = 'flex';
        if (`${this.disp}` == 0) {
            HTMLUListElement.style.flexDirection = 'row';
        } else {
            HTMLUListElement.style.flexDirection = 'column';
        }
    }
    addItem(nouveau) {
        labels.push(nouveau);
        let menuObj2 = menu.getObjDOM();
        out.replaceChild(menuObj2, menuObj);
        menuObj2.addEventListener('menu_click', evt =>
            console.log(`Clic sur ${labels[evt.detail.index]}`));
    }
}


let labels = ["Accueil", "Produits", "Contact"];
let menu = new Menu(labels);
let menuObj = menu.getObjDOM();
let out = document.body;
out.appendChild(menuObj);

menuObj.addEventListener('menu_click', evt =>
    console.log(`Clic sur ${labels[evt.detail.index]}`));

function partie2() {
    menu.setEsp(100);
    menu.setDisp(1);
    menu.addItem('test');
}

setTimeout(() => partie2(), 2000);
