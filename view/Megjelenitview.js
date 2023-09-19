import MegjelenitSor from "./MegjelenitSorView.js";

class Megjelenit {
  #list = [];
  #toroltSorok = [];

  constructor(list, szuloElem) {
    this.#list = list;
    this.#toroltSorok = [];
    
    szuloElem.append(`<table class="table table-bordered table-striped">`);
    this.tablaElem = szuloElem.children("table");
    this.tablazatbaIr();
  }

  tablazatbaIr() {
    let txt = "";
    this.#list.forEach((elem) => {
      const megjelenitSor = new MegjelenitSor(elem, this.tablaElem);

      // Ellenőrizd, hogy a sor szerepel-e a kitörölt sorok között
      if (!this.#toroltSorok.some((toroltSor) => toroltSor.id === elem.id)) {
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
    this.tablaElem.empty(); // Töröljük az előző tartalmat
    this.tablazatbaIr();
  }

  // Eltárolja a kitörölt sorokat
  storeDeletedSor(sor) {
    console.log(sor)
    this.#toroltSorok.push(sor);
  }
}

export default Megjelenit;