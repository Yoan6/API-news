class News {
    title;
    description;
    link;
    country;

    constructor(title, desc, link, country) {
        this.description = desc;
        this._title = title;
        this._desc = desc;
        this._link = link;
        this._country = country;
    }

    getTitle() {
        return this._title;
    }

    setTitle(value) {
        this._title = value;
    }

    getDesc() {
        return this._desc;
    }

    setDesc(value) {
        this._desc = value;
    }

    getLink() {
        return this._link;
    }

    setLink(value) {
        this._link = value;
    }

    getCountry() {
        return this._country;
    }

    setCountry(value) {
        this._country = value;
    }
}