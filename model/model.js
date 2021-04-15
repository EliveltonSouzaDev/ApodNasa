
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
                this._input = response.date;

            } else {
                console.log("Um código inesperado foi retornado!");
            }

        });

        request.send();
    }
};