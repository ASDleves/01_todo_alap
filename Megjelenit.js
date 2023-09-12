import MegjelenitSor from "./MegjelenitSor.js";
class Megjelenit {
    #list= [];
    constructor(list, szuloElem){
        this.#list = list;

        szuloElem.append(`<table class="table table bordered table-striped">`)
        this.tablaElem = szuloElem.children("table")
        this.tablazatbaIr()
    }
    tablazatbaIr(){
        let txt = "";
        this.#list.forEach((elem) => {
               new MegjelenitSor(elem, this.tablaElem) 
        })
    
}
}


export default Megjelenit