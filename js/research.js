class Research {
    cle;
    _input;
    MotsAEnlever;
    language;
    _resultatDerniereRecherche;

    constructor() {
        this._input = "";
        this.cle = "pub_188751c295912cb26cf6bfc9df7d0c632dbb3";
        this.language = "fr";
        this.MotsAEnlever = "";
        this.resultatDerniereRecherche = [];
    }


    setMotAEnlever(value) {
        this.MotsAEnlever = value;
    }

    getInput() {
        return this._input;
    }

    setInput(value) {
        this._input = value;
    }

    setLanguage(value) {
        this.language = value;
    }

    addToInput(value) {
        this._input = this._input + value;
    }

    async appelApiQ() {
        let url = "https://newsdata.io/api/1/news?apikey=" + this.cle + "&q=" + this._input + "&language=" + this.language;
        const rep = await fetch(url);
        const data = await rep.json();
        return this.tableauResultats(data);
    }

    async appelApiQWo() {
        let queryWo = "";
        if (this._input.indexOf("NOT")!==-1) {
            queryWo = this._input + this.MotsAEnlever;
        } else {
            queryWo = this._input + " NOT " + this.MotsAEnlever;
        }
        let url = "https://newsdata.io/api/1/news?apikey=" + this.cle + "&q=" + queryWo + "&language=" + this.language;
        const rep = await fetch(url);
        const data = await rep.json();
        return this.tableauResultats(data);
    }

    tableauResultats(data) {
        const tabNews = [];
        tabNews.push(data["totalResults"]);
        for (let i = 1; i < data["results"].length; i++) {
            let news = new News(data["results"][i].title, data["results"][i].description, data["results"][i].link, data["results"][i]["country"][0]);
            tabNews.push(news);
        }
        this._resultatDerniereRecherche = tabNews;
        return tabNews
    }
    /*
    setState () {
        try {
            const resp = await fetch(https://newsdata.io/api/1/news?apikey=" + this.cle + ;
        }
    }
    */



    getResultatDerniereRecherche() {
        return this._resultatDerniereRecherche;
    }

    supprimerFavoris() {

    }


}