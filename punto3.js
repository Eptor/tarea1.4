let finDeTransmisionDeDatos = function (id, callback) {
	console.log('Transferencia', id, 'terminada');
	callback();
}

let obtenDatosDeInternet = function (id, duracion, callback) {
	console.log('Proceso', id, 'obteniendo datos de Internet');
	setTimeout(finDeTransmisionDeDatos, duracion, id, callback);
}

obtenDatosDeInternet(1, 1000, function() {console.log('Programa terminado')});
obtenDatosDeInternet(2, 500, function() {console.log('Programa terminado')})
obtenDatosDeInternet(3, 1500, function() {console.log('Programa terminado')})
obtenDatosDeInternet(4, 700, function() {console.log('Programa terminado')})
