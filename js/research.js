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
}