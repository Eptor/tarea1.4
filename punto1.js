const N = parseInt(process.argv[2]);

try {
    if (isNaN(N) || N <= 0) {
        throw new Error('N debe ser un entero mayor a cero.');
    }

    // Simulación de una lista de asignaturas
    const asignaturas = [
        { clave: 101, nombre: "Matemáticas", creditos: 4 },
        { clave: 102, nombre: "Programación", creditos: 6 },
        { clave: 103, nombre: "Física", creditos: 5 }
    ];

    // Función para generar fechas aleatorias dentro de un rango
    const generarFechaAleatoria = (inicio, fin) => new Date(inicio.getTime() + Math.random() * (fin.getTime() - inicio.getTime()));

    // Definimos el rango de fechas desde 01/01/2021 hasta 30/06/2023
    const inicio = new Date('2023-08-01');
    const fin = new Date('2024-02-20');

    // Crear un arreglo de tamaño N con objetos simulando registros
    const historial = Array.from({ length: N }, () => {
        const asignatura = asignaturas[Math.floor(Math.random() * asignaturas.length)];
        return {
            clave: asignatura.clave,
            creditos: Math.floor(Math.random() * (9 - 4) + 4), // Créditos entre 4 y 8
            nombre: asignatura.nombre,
            calificacion: parseFloat((Math.random() * 100).toFixed(2)), // Calificación entre 0 y 100
            fecha: generarFechaAleatoria(inicio, fin)
        };
    });
    // console.log(historial)

    // Fecha de corte para los últimos 6 meses desde la fecha actual
    const fechaCorte = new Date();
    fechaCorte.setMonth(fechaCorte.getMonth() - 6);

    // Filtrar y mapear el historial según los criterios
    const resultado = historial
        .filter(({ calificacion, fecha }) => calificacion < 60 && fecha > fechaCorte)
        .map(({ clave, creditos, nombre, calificacion, fecha }) => ({
            clave,
            creditos,
            nombre,
            calificacion,
            fechaStr: `${fecha.getDate().toString().padStart(2, '0')}/${(fecha.getMonth() + 1).toString().padStart(2, '0')}/${fecha.getFullYear()}`
        }));

    console.log('Resultados de la búsqueda con calificacion < 60 y fecha > fecha_actual - 6 meses:');
    console.log(resultado);
} catch (error) {
    console.error(error.message);
}

