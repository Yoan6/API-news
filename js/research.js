class Research {
    cle;
    _input;
    MotsAEnlever;
    language;

    constructor() {
        this._input = "";
        this.cle = "pub_188751c295912cb26cf6bfc9df7d0c632dbb3";
        this.language = "fr";
        this.MotsAEnlever = "";
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

    async appelApiByUrl(url) {
        const rep = await fetch(url);
        const data = await rep.json();
        return this.tableauResultats(data);
    }

    async appelApiQ() {
        let url = this.getUrl();
        const rep = await fetch(url);
        const data = await rep.json();
        return this.tableauResultats(data);
    }

    async appelApiQWo() {
        let url = this.getUrlWo();
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
        return tabNews
    }

    getUrlWo() {
        let queryWo;
        if (this._input.indexOf("NOT") !== -1) {
            queryWo = this._input + this.MotsAEnlever;
        } else {
            queryWo = this._input + " NOT " + this.MotsAEnlever;
        }
        return "https://newsdata.io/api/1/news?apikey=" + this.cle + "&q=" + queryWo + "&language=" + this.language;
    }

    getUrl() {
        return "https://newsdata.io/api/1/news?apikey=" + this.cle + "&q=" + this._input + "&language=" + this.language;
    }


}