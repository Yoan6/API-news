"use strict";
const view = {
    stringInput: document.getElementById("recherche"),
    btnFavoris: document.getElementById("btn-favoris"),
    btnRecherche: document.getElementById("btn-lancer-recherche"),
    resultats: document.querySelectorAll(".res"),
    blocResultats: document.getElementById("bloc-resultats"),
    imgEtoile: document.querySelector("#btn-favoris img"),
    infoVide: document.querySelectorAll(".info-vide"),
    conteneurFavorites: document.getElementById("liste-favoris"),
    rechercheFavorites: document.querySelectorAll("#liste-favoris li"),
    gifAttente: document.getElementById("bloc-gif-attente"),
    selectLangue: document.getElementById("langue"),
    motsaenleverInput: document.getElementById("motsaenlever"),
    favoris: document.querySelectorAll(".favoris"),
    imgCroix: document.querySelectorAll(".croix-favoris"),


    addFavorite() {
        // Récupérer la chaîne de recherche actuelle

        // Mettre à jour l'apparence du bouton de favoris
        view.btnFavoris.classList.add("btn_clicable");

        // On créé l'élément li correspondant à la recherche favoris
        const elementFavoris = document.createElement("li");
        const span = document.createElement("span");
        span.title = "Cliquer pour relancer la recherche";
        span.classList.add("favoris");
        const imgCroix = document.createElement("img");
        span.textContent = this.stringInput.value;
        imgCroix.src = "images/croix.svg";
        imgCroix.alt = "Icone pour supprimer le favoris";
        imgCroix.title = "Cliquer pour supprimer le favori";
        imgCroix.className = 'croix-favoris';
        imgCroix.width = 15;
        // On ajoute l'élément au conteneur
        elementFavoris.appendChild(span);
        elementFavoris.appendChild(imgCroix);
        this.conteneurFavorites.appendChild(elementFavoris);
        // On actualise les recherches favorites
        view.favoris = document.querySelectorAll(".favoris");
        view.imgCroix = document.querySelectorAll(".croix-favoris");
    },

    removeFavorite(value) {
        let confirmer = confirm("Souhaitez-vous supprimer ce favoris ?");
        if (confirmer) {
            console.log(value);
            document.getElementById("li-favoris").remove();
            localStorage.removeItem(value);
        }
    },

    modifierEtoileFavoris() {
        if (this.stringInput.value === "") {
            // Si le champ de saisie est vide, désactiver le bouton et afficher l'étoile vide
            this.btnFavoris.setAttribute("disabled", "");
            this.btnFavoris.style.cursor = "default";
            this.imgEtoile.setAttribute('src', 'images/etoile-vide.svg');
        } else {
            // Si le champ de saisie n'est pas vide et que la recherche ne fait pas partit des favoris, mettre le background du bouton en vert
            this.btnFavoris.removeAttribute("disabled");
            this.btnFavoris.style.backgroundColor = "rgb(26, 188, 156)";
            this.btnFavoris.style.cursor = "pointer";
            this.imgEtoile.setAttribute('src', 'images/etoile-pleine.svg');
        }
    },

    afficheArticle(data) {
        this.blocResultats.innerHTML = "";
        this.gifAttente.style.visibility = "visible";
        const nbArticle = document.createElement("p");
        nbArticle.textContent = "Nombre d'article trouvé : " + data[0]
        this.blocResultats.appendChild(nbArticle);
        for (let i = 1; i < data.length; i++) {
            const art = document.createElement("ul");
            art.classList.add("res");
            const title = document.createElement("p");
            title.textContent = "Titre de l'article : " + data[i].getTitle();
            art.appendChild(title);
            const count = document.createElement("p");
            count.textContent = "Pays de l'article : " + data[i].getCountry();
            art.appendChild(count);
            const link = document.createElement("a");
            link.textContent = "Lien pour aller voir l'article en entier ";
            link.href = data[i].getLink();
            art.appendChild(link);
            const desc = document.createElement("p");
            desc.textContent = "Résumé de l'article : " + data[i].getDesc();
            art.appendChild(desc);
            this.blocResultats.appendChild(art);
        }
        view.gifAttente.style.visibility = "collapse";
    },
}