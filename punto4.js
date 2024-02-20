const servicio = require("./servicioDatos");

let getDatosOrdenadosPorCallback = function () {
    servicio.obtenDatosDeInternet(1, 3000, () => {
        servicio.obtenDatosDeInternet(2, 500, () => {
            servicio.obtenDatosDeInternet(3, 4000, () => {
                servicio.obtenDatosDeInternet(4, 700, () => {
                    servicio.obtenDatosDeInternet(5, 3500, () => {
                        console.log('Todos los datos han sido obtenidos');
                    });
                });
            });
        });
    });
};

getDatosOrdenadosPorCallback();
