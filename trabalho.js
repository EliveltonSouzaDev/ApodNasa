
var button = document.getElementById("fotododia");
let input = document.getElementById("data");

window.onload = function(){

let request = new XMLHttpRequest();

request.open("GET",`https://api.nasa.gov/planetary/apod?api_key=4NIkTZ3CfK1HkJ5vuRxze67FaTVzbJMRdPSznQ2R${ criaQueryString() }`);

request.responseType = 'json';




request.onload = function(){

var dados = request.response;

var img = document.createElement("IMG");
img.src = dados.url;
img.setAttribute("id", "img");
document.querySelector('#grid').appendChild(img);

var descricao = dados.explanation;
let p = document.createElement("p");
p.textContent = descricao;
p.setAttribute("id", "txt");
document.querySelector('#grid').appendChild(p);

}

request.send();

};


function criaQueryString()
{
    // Pega o número escrito no input
    let data = document.getElementById( "data" ).value ;

    return `&date=${ data }`;
}





