import MegjelenitSor from "./MegjelenitSorView.js";

class Megjelenit {
  #list = [];
  #toroltSorok = [];

  constructor(list, szuloElem) {
    this.#list = list;
    
    
    szuloElem.append(`<table class="table table-bordered table-striped">`);
    this.tablaElem = szuloElem.children("table");
    this.tablazatbaIr();
  }
  isSorTorolve(sor) {
    return this.#toroltSorok.some((toroltSor) => toroltSor.id === sor.id);
}

tablazatbaIr() {
  let txt = "";
  this.#list.forEach((elem) => {
    // Ellenőrizzük, hogy a sor benne van-e a toroltSorok listában
    const isToroltSor = this.#toroltSorok.some((toroltSor) => toroltSor.id === elem.id);

    if (!isToroltSor) {
      const megjelenitSor = new MegjelenitSor(elem, this.tablaElem);

      if (elem.allapot) {
        megjelenitSor.sorElem.css("background-color", "green");
        megjelenitSor.megseElem.show();
        megjelenitSor.pipaelem.hide();
      }
    }
  });
}


  frissit(list) {
    this.#list = list;
    this.#toroltSorok = []; // Frissítjük a toroltSorok listát
    this.tablaElem.empty(); // Töröljük az előző tartalmat
    this.tablazatbaIr();
}

  // Eltárolja a kitörölt sorokat
 
}

export default Megjelenit;