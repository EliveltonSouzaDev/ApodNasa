
const { addDays, subDays, isToday, format } = globalThis.dateFns;

const input = document.getElementById('data');


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

    get input(){
        return this._input;

    }

    buscaDados() {

        let request = new XMLHttpRequest();

        // passar como parametro a data

        let input = document.getElementById('data');


        request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=4NIkTZ3CfK1HkJ5vuRxze67FaTVzbJMRdPSznQ2R&date=${input.value}`, false);

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

class NasaViews {

    constructor() {

        this._text = document.getElementById("p")
        this._img = document.getElementById("img")
        this._title = document.getElementById("title")
        this._input = document.getElementById("data")


    }

    criaElementos(text, img, title,input) {


        this._img.src = img;
        this._text.textContent = text;
        this._title.textContent = title;
        this._input.innerHTML = input;


    }
};

class NasaController {

    buscarInfo() {

        let dados = new NasaModel()
        dados.buscaDados()

        let desenha = new NasaViews()
        desenha.criaElementos(dados.text, dados.img, dados.title, dados.input);

    }

    teste(){
        var d = new Date();

        console.log(d.getDate());

    }

}

let controller = new NasaController();


let btn = document.getElementById('arquived');
btn.addEventListener('click', () => {
    controller.buscarInfo()
});


// botoes

/*var hoje = addDays(new Date(), 1);

hoje = format(new Date(input.value),'YYYY-MM-DD')

console.log(hoje);


var result2 = format(new Date(), 'YYYY-MM-DD')

console.log(result2);

var  ontem = subDays(new Date(), 1,)
console.log(ontem);*/


// ao carregar a página aparece a imagem do dia

window.onload = controller.buscarInfo();


let buttonFind = document.getElementById("arquived");
let buttonPrevious = document.getElementById("previous");

let buttonNext = document.getElementById("next");


// Busca o dia posterior e remove o dia atual
buttonNext.addEventListener("click", function () {
    

    controller.teste()

});

buttonPrevious.addEventListener("click", function () {

    controller.buscarInfo();

    var data = document.getElementById('data');


});


 