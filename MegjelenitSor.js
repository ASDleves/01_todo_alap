class MegjelenitSor {
    #adat = {}

    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.tablaElem = szuloElem;
        this.#sor();
        this.sorElem = this.tablaElem.children("tr:last-child");
        this.pipaelem = this.sorElem.children("td").children(".kesz")
        this.megseElem = this.sorElem.children("td").children(".megse");
        this.torolElem = this.sorElem.children("td").children(".torol");
        this.megseElem.hide();

        this.pipaelem.on("click", () => {
            this.sorElem.css("background-color", "green");
            this.megseElem.show();
            this.pipaelem.hide();
        });

        this.megseElem.on("click", () => {
            this.sorElem.css("background-color", "white");
            this.pipaelem.show();
            this.megseElem.hide();
        });

        this.torolElem.on("click", () => {
            this.#esemenyTrigger("torles");
        });
    }

    #sor() {
        let txt = "<tr>";

        for (const key in this.#adat) {
            const element = this.#adat[key];
            txt += `<td>${element}</td>`;
        }

        txt += '<td><button class="kesz">✔️</button><button class="megse">❌</button><button class="torol">🗑️</button></td>';

        txt += "</tr>";
        this.tablaElem.append(txt);
    }
    #esemenyTrigger(){
        const esemeny = new CustomEvent("elemKivalasztas", {
             detail: this
            });
        window.dispatchEvent(esemeny)
    }
}

export default MegjelenitSor;