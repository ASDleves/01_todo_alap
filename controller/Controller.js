import Megjelenit from "../view/Megjelenitview.js";
import Model from "../model/Model.js";
import Urlap from "../view/urlapView.js";

class Controller {
    constructor(){
        const szuloElem = $(".tarolo");
    const urlap = new Urlap({tevekenyseg:"",hatarido:""},$(".ujadat"));
    const MODEL=new Model()
    const megjelenito = new Megjelenit(MODEL.getList(), szuloElem);

    urlap.setSubmitHandler((ujAdat) => {
        MODEL.getList().push(ujAdat);
        megjelenito.frissit(MODEL.getList());
    });
    console.log(MODEL.getList())
    $(window).on("torles", (event) => {
        console.log(event.detail);
    });
    }
}
export default Controller