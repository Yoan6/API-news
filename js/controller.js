"use strict";
let research = new Research();

view.btnFavoris.addEventListener("click", function () {
    view.favorite(Research.getInput());
})

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

