const nomes = [

    "Produtor Rural",

    "Agricultor do Futuro",

    "Gestor do Agronegócio",

    "Especialista em Tecnologia",

    "Produtor Sustentável",

    "Profissional do Campo"

];


export function aleatorio(lista) {

    const posicao =
        Math.floor(
            Math.random() * lista.length
        );

    return lista[posicao];
}


export const nome =
    aleatorio(nomes);