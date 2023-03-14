
class research{
    cle;
    _input;
    constructor() {
    this._input="";
    this.cle="pub_188751c295912cb26cf6bfc9df7d0c632dbb3";
    }

    set input(value) {
        this._input = value;
    }
    addToInput(value){
        this._input=this._input+value;
    }

    appelApiQ(){
        return "https://newsdata.io/api/1/news?apikey="+this.cle+"&q="+this._input;
    }
}