"use strict";
let research = new Research();

view.btnFavoris.addEventListener("click", function () {
    research.setInput(view.stringInput.value);
    research.setLanguage(view.selectLangue.selectedOptions[0].value);
    let url;
    if (view.motsaenleverInput.value === "") {
        url = research.getUrl();
    } else {
        research.setMotAEnlever(view.motsaenleverInput.value);
        url = research.getUrlWo()
    }
    var recherche = view.stringInput.value.trim();
    // Vérifier si la recherche n'est pas déjà enregistrée comme favori
    var favoris = JSON.parse(localStorage.getItem(recherche)) || [];
    if (!favoris.includes(recherche)) {
        // Ajouter la recherche à la liste des favoris et enregistrer la liste dans le stockage local
        localStorage.setItem(recherche, url);
        view.addFavorite();
        view.favoris.forEach(fav => fav.addEventListener("click", async function () {
            let data = await research.appelApiByUrl(localStorage.getItem(fav.textContent));
            view.afficheArticle(data);
        }))
        view.imgCroix.forEach(img => img.addEventListener("click", function () {
            img.parentElement.firstElementChild.id = "li-favoris";
            view.removeFavorite(img.parentElement.firstElementChild.textContent);
        }))
    }
})

view.stringInput.addEventListener("input", function () {
    view.modifierEtoileFavoris();
});

// Lorsqu'on clique sur l'image croix pour supprimer une recherche favorite :


view.btnRecherche.addEventListener("click", async function () {

    research.setInput(view.stringInput.value);
    research.setLanguage(view.selectLangue.selectedOptions[0].value);
    let data;
    if (view.motsaenleverInput.value === "") {
        data = await research.appelApiQ();
    } else {
        research.setMotAEnlever(view.motsaenleverInput.value);
        data = await research.appelApiQWo()
    }

    view.afficheArticle(data);
})



