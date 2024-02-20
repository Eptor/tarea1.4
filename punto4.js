const servicio = require("./servicioDatos");

servicio.obtenDatosDeInternet(1, 3000)
    .then(() => servicio.obtenDatosDeInternet(2, 500))
    .then(() => servicio.obtenDatosDeInternet(3, 4000))
    .then(() => servicio.obtenDatosDeInternet(4, 700))
    .then(() => servicio.obtenDatosDeInternet(5, 3500))
    .then(() => console.log('Todos los datos han sido obtenidos usando Promesas y .then()'));
