// modelo para os dados serem inseridos

class NasaModel {

    constructor() {
        this._img = "";
        this._text = "";
        this._title = "";
       this._data = "";
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

    get data() {
        return this._data;

    }

    // metodo que busca dados da API
   buscaDados(data) {

        let request = new XMLHttpRequest();

        // passar como parâmetro a data

        request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=4NIkTZ3CfK1HkJ5vuRxze67FaTVzbJMRdPSznQ2R&date=${data}`, false);

        request.addEventListener('load', () => {

            if (request.status == 200) {

                let response = JSON.parse(request.responseText);

                this._img = response.url;
                this._text = response.explanation;
                this._title = response.title;
                this._date = response.date;

            } else {
                console.log("Um código inesperado foi retornado!");
            }

        });

        request.send();
    }}

    

    /*buscaDados(data, request) {

        fetch(`https://api.nasa.gov/planetary/apod?api_key=4NIkTZ3CfK1HkJ5vuRxze67FaTVzbJMRdPSznQ2R&date=${data}`)

        .then((response) => response.json())
        
        .then(response => {
            this._titulo = response.title;
            this._img = response.url;
            this._date = response.date;
            this._text = response.explanation;
            request();
        })
        .catch(err =>{
            console.log(`${err} Deu erro ai ó`)
         })

        }
    }*/
    



// pega as divs já criadas no html e insere os dados nela.

class NasaViews {

    constructor() {
        this._text = document.getElementById("p")
        this._img = document.getElementById("img")
        this._title = document.getElementById("title")
        this._data = document.getElementById("date-text")
    }

    criaElementos(text, img, title, data) {

        this._img.src = img;
        this._text.textContent = text;
        this._title.textContent = title;
        this._data.innerHTML = data;

    }
};

// busca os dados da model junto com o views e insere
class NasaController {

    buscarInfo(data) {

        let dados = new NasaModel()
        dados.buscaDados(data)

        let desenha = new NasaViews(dados)
        desenha.criaElementos(dados.text, dados.img, dados.title, dados.data);
    }

    carregaPagina(data) {
        

        let dados = new NasaModel()
        dados.buscaDados(data)

        let desenha = new NasaViews(dados)
        desenha.criaElementos(dados.text, dados.img, dados.title,dados.data);
    }

}

let controller = new NasaController();

// pega da data do submit
let btn = document.getElementById('submit');
btn.addEventListener('click', () => {

    let data = document.getElementById('data');
    let dataFormatada = data.value;
    controller.buscarInfo(dataFormatada)
});

//formata data para padrao br
function dataAtual() {

    let dataAtual = new Date()
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth();
    let ano = dataAtual.getFullYear();

    return `${ano}-${mes+1}-${dia}`
}


// ao carregar a página aparece a imagem do dia
controller.carregaPagina(dataAtual())



function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }

  
  const titulo = document.querySelector('h1');
  typeWriter(titulo);
 















/*

var hoje = addDays(new Date(), 1);

hoje = format(new Date(),'YYYY-MM-DD')

console.log(hoje);


var result2 = format(new Date(), 'YYYY-MM-DD')

console.log(result2);

var  ontem = subDays(new Date(), 1,)
console.log(ontem);*/