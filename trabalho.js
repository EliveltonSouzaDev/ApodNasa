const {
    addDays,
    subDays,
    isToday,
    format
} = globalThis.dateFns;

// modelo para os dados serem inseridos
class NasaModel {

    constructor() {
        this._img = "";
        this._text = "";
        this._data = "";
        this._input = "";
    }

    get img() {
        return this._img;
    }

    get text() {
        return this._text;
    }

    get title() {
        return this._title;
    }

    get input() {
        return this._input;

    }

    // metodo que busca dados da API
    buscaDados() {

        let request = new XMLHttpRequest();

        // passar como parâmetro a data

        request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=4NIkTZ3CfK1HkJ5vuRxze67FaTVzbJMRdPSznQ2R&date=${this._input}`, false);

        request.addEventListener('load', () => {

            if (request.status == 200) {

                let response = JSON.parse(request.responseText);

                this._img = response.url;
                this._text = response.explanation;
                this._title = response.title;
                this._input = response.date;

            } else {
                console.log("Um código inesperado foi retornado!");
            }


        });

        request.send();

    }
};

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

// busca os dados da model junto com o views e insere
class NasaController {

    buscarInfo() {

        let dados = new NasaModel()
        dados.buscaDados()

        let desenha = new NasaViews(dados)
        desenha.criaElementos(dados.text, dados.img, dados.title, dados.input);

    }

    buttonNext() {
        let data = document.getElementById('date-text')

    }

    buttonPrevious() {
        let data = document.getElementById('date-text')
    }
}

let controller = new NasaController();


let btn = document.getElementById('arquived');
btn.addEventListener('click', () => {
    controller.buscarInfo()
});


var hoje = addDays(new Date(), 1);

hoje = format(new Date(), 'YYYY-MM-DD');

console.log(hoje);

// ao carregar a página aparece a imagem do dia
window.onload = controller.buscarInfo(hoje);


// pega os ids dos botões
let buttonFind = document.getElementById("arquived");
let buttonPrevious = document.getElementById("previous");
let buttonNext = document.getElementById("next");


// Busca o dia posterior e remove o dia atual
buttonNext.addEventListener("click", function () {


    controller.buttonNext()
});

buttonPrevious.addEventListener("click", function () {

    controller.buttonPrevious();

    var data = document.getElementById('data');


});























/*

var hoje = addDays(new Date(), 1);

hoje = format(new Date(),'YYYY-MM-DD')

console.log(hoje);


var result2 = format(new Date(), 'YYYY-MM-DD')

console.log(result2);

var  ontem = subDays(new Date(), 1,)
console.log(ontem);*/