import { TODOLIST2 } from "../adatok.js";

class MegjelenitSor {
    #adat = {};

    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.tablaElem = szuloElem;
        this.#sor();
        this.sorElem = this.tablaElem.children("tr:last-child");
        this.pipaelem = this.sorElem.children("td").children(".kesz");
        this.megseElem = this.sorElem.children("td").children(".megse");
        this.torolElem = this.sorElem.children("td").children(".torol");
        this.megseElem.hide();

        this.pipaelem.on("click", () => {
            this.sorElem.css("background-color", "green");
            this.megseElem.show();
            this.pipaelem.hide();
            // Állapot változtatás: false-ról true-ra
            this.#adat.allapot = true;
            // Esemény kiváltása a változásról
            this.#esemenyTrigger("allapotValtozas");
        });

        this.megseElem.on("click", () => {
            this.sorElem.css("background-color", "white");
            this.pipaelem.show();
            this.megseElem.hide();
            // Állapot változtatás: true-ról false-ra
            this.#adat.allapot = false;
            // Esemény kiváltása a változásról
            this.#esemenyTrigger("allapotValtozas");
        });

        this.torolElem.on("click", () => {
            this.sorElem.remove();
            this.#esemenyTrigger("torol");
        });
    }

    #sor() {
        let txt = "<tr>";

        txt += `<td>${this.#adat.tevekenyseg}</td>`;
        txt += `<td>${this.#adat.hatarido}</td>`;

        txt += '<td><button class="kesz">✔️</button><button class="megse">❌</button><button class="torol">🗑️</button></td>';

        txt += "</tr>";
        this.tablaElem.append(txt);
    }

    #esemenyTrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, {
            detail: this.#adat,
        });
        window.dispatchEvent(esemeny);
    }
}

export default MegjelenitSor;