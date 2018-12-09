document.querySelector('#dolar').addEventListener('click', function() {
    obtenerDatos('dolar');
})
document.querySelector('#uf').addEventListener('click', function() {
    obtenerDatos('uf');
})

function obtenerDatos(valor) {
    let url = `https://mindicador.cl/api/${valor}`;

    const api = new XMLHttpRequest();
    //istanciamos nuestro objero 
    api.open('GET', url, true)
        //con el open iniciamos el metodo get e indicamos si es ansincrono o no.
    api.send();

    api.onreadystatechange = function() {
        //retornamos la funcion
        if (this.status == 200 && this.readyState == 4) {
            // si estos valores son ciertos, consulta el api
            let datos = JSON.parse(this.responseText);
            //aqui ingresamos los datos del api en un array
            console.log(datos.serie);
            let resultado = document.querySelector('#resultado');
            //hacemos la interaccion de nuestra lista creada
            resultado.innerHTML = '';
            //lo inicializamos vacio para poder paserle todos nuestros parametros 

            for (let llenar of datos.serie) {
                console.log(llenar.fecha);
                resultado.innerHTML += `<li class='collection-header'>${llenar.fecha.substr(0,10)} | $ ${llenar.valor} </li>`;
            }
            //ahora interamos nuestro array en un for
        }
    }
}