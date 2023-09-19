class Urlap {
    #adat = {};

    constructor(adat, szuloElem) {
        this.szuloElem = szuloElem;
        this.szuloElem.html("<form>");
        this.formElem = this.szuloElem.children("form");
        this.#adat = adat;
        this.#urlapLetrehozasa();
    }

    setSubmitHandler(callback) {
        this.submitelem.on("click", (event) => {
            event.preventDefault();
            this.#adatGyujt();
            callback(this.#adat); 
        });
    }

    #urlapLetrehozasa() {
        let txt = "";
        for (const key in this.#adat) {
            txt += `<div class="form-group">
                <label for="${key}">${this.#adat[key]}</label>
                <input type="text" class="form-control" id="${key}" name="${key}" value="${this.#adat[key]}">
            </div>`;
        }
        txt += `<div>
            <input type="submit" class="btn btn-primary" id="submit" value="hozzáad">
        </div>`;
        this.formElem.html(txt);
        this.submitelem = this.formElem.children("div").children("#submit");
    }

    #adatGyujt() {
        for (const key in this.#adat) {
            this.#adat[key] = $(`#${key}`).val();
        }
        console.log(this.#adat);
    }
}

export default Urlap;