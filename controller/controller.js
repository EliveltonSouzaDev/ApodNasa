
// busca os dados da model junto com o views e insere
 class NasaController {

    buscarInfo(data) {

        let dados = new NasaModel()
        dados.buscaDados(data)

        let desenha = new NasaViews(dados)
        desenha.criaElementos(dados.text, dados.img, dados.title,dados.input);
    }

    carregaPagina(data) {

        let dados = new NasaModel()
        dados.buscaDados(data)

        let desenha = new NasaViews(dados)
        desenha.criaElementos(dados.text, dados.img, dados.title,dados.input);
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

function dataAtual() {

 let dataAtual = new Date()
 let dia = dataAtual.getDate();
 let mes = dataAtual.getMonth();
 let ano = dataAtual.getFullYear();

 return `${ano}-${mes+1}-${dia}`
}

// ao carregar a página aparece a imagem do dia
controller.carregaPagina(dataAtual())




















