
// pega as divs já criadas no html e insere os dados nela.

class NasaViews {

    constructor() {
        this._text = document.getElementById("p")
        this._img = document.getElementById("img")
        this._title = document.getElementById("title")
        this._input = document.getElementById("date-txt")
    }

    criaElementos(text, img, title, input) {

        this._img.src = img;
        this._text.textContent = text;
        this._title.textContent = title;
        this._input.innerHTML = input;
    }
};