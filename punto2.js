const ataqueGolpe = function () {
    return "Atacando con golpe";
};

const ataqueRayo = function () {
    return "Atacando con rayo fulminante";
};

const atacar = ataque => personaje => `${ataque()} a ${personaje}`;

// Ejemplo de uso
console.log(atacar(ataqueGolpe)("Personaje 1"));
console.log(atacar(ataqueRayo)("Personaje 2"));
