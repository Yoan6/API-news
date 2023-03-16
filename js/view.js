"use strict";
const view = {
    stringInput: document.getElementById("recherche"),
    btnFavoris: document.getElementById("btn-favoris"),
    btnRecherche: document.getElementById("btn-lancer-recherche"),
    resultats: document.querySelectorAll(".res"),
    blocResultats: document.getElementById("bloc-resultats"),
    infoVide: document.querySelectorAll(".info-vide"),
    conteneurFavorites: document.getElementById("liste-favoris"),
    rechercheFavorites: document.querySelectorAll("#liste-favoris li"),
    gifAttente: document.getElementById("bloc-gif-attente"),
    selectLangue: document.getElementById("langue"),
    motsaenleverInput : document.getElementById("motsaenlever"),

    updateFrom(research) {
        this.stringInput.value = research.getInput();
    },

    /*favorite(input) {
        // On créé l'élément li correspondant à la recherche favoris
        const favoris = document.createElement("li");
        const span = document.createElement("span");
        const imgCroix = document.createElement("img");
        span.textContent = input;
        imgCroix.setAttribute('src', 'images/croix.svg');
        imgCroix.setAttribute('alt', 'Icone pour supprimer le favoris');
        imgCroix.setAttribute('title', 'Cliquer pour supprimer le favori');

        // On ajoute l'élément au conteneur
        favoris.appendChild(span);
        favoris.appendChild(imgCroix);
        this.conteneurFavorites.appendChild(favoris);
    },*/

    /*favorite () {
        const state = {

        }
    }*/

    afficheArticle(data) {
        this.blocResultats.innerHTML="";
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
            link.href=data[i].getLink();
            art.appendChild(link);
            const desc = document.createElement("p");
            desc.textContent = "Résumé de l'article : " + data[i].getDesc();
            art.appendChild(desc);
            this.blocResultats.appendChild(art);
        }
        view.gifAttente.style.visibility = "collapse";
    }
}