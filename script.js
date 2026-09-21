import {
    aleatorio,
    nome
} from "./aleatorio.js";

import {
    perguntas
} from "./perguntas.js";


const caixaPerguntas =
    document.querySelector(
        ".caixa-perguntas"
    );


const caixaAlternativas =
    document.querySelector(
        ".caixa-alternativas"
    );


const caixaResultado =
    document.querySelector(
        ".caixa-resultado"
    );


const textoResultado =
    document.querySelector(
        ".texto-resultado"
    );


const nomeResultado =
    document.querySelector(
        ".nome-resultado"
    );


const botaoIniciar =
    document.querySelector(
        ".iniciar-btn"
    );


const botaoJogarNovamente =
    document.querySelector(
        ".novamente-btn"
    );


const telaInicial =
    document.querySelector(
        ".tela-inicial"
    );


let atual = 0;

let perguntaAtual;

let historiaFinal = "";



/* INICIAR */

botaoIniciar.addEventListener(
    "click",
    iniciaJogo
);



function iniciaJogo() {

    atual = 0;

    historiaFinal = "";

    telaInicial.style.display =
        "none";

    caixaPerguntas.classList.add(
        "mostrar"
    );

    caixaAlternativas.classList.add(
        "mostrar"
    );

    caixaResultado.classList.remove(
        "mostrar"
    );

    mostraPergunta();
}



/* MOSTRAR PERGUNTA */

function mostraPergunta() {

    if (
        atual >= perguntas.length
    ) {

        mostraResultado();

        return;
    }


    perguntaAtual =
        perguntas[atual];


    caixaPerguntas.textContent =
        perguntaAtual.enunciado;


    caixaAlternativas.innerHTML =
        "";


    mostraAlternativas();
}



/* ALTERNATIVAS */

function mostraAlternativas() {

    for (
        const alternativa
        of perguntaAtual.alternativas
    ) {

        const botao =
            document.createElement(
                "button"
            );


        botao.type =
            "button";


        botao.textContent =
            alternativa.texto;


        botao.addEventListener(
            "click",
            function () {

                respostaSelecionada(
                    alternativa
                );

            }
        );


        caixaAlternativas.appendChild(
            botao
        );

    }

}



/* RESPOSTA */

function respostaSelecionada(
    opcaoSelecionada
) {

    if (
        Array.isArray(
            opcaoSelecionada.afirmacao
        )
    ) {

        const afirmacao =
            aleatorio(
                opcaoSelecionada.afirmacao
            );


        historiaFinal +=
            afirmacao + " ";
    }


    if (
        opcaoSelecionada.proxima
        !== undefined
    ) {

        atual =
            opcaoSelecionada.proxima;

        mostraPergunta();

    } else {

        mostraResultado();

    }

}



/* RESULTADO */

function mostraResultado() {

    nomeResultado.textContent =
        `Perfil: ${nome}`;


    textoResultado.textContent =
        historiaFinal.trim();


    caixaPerguntas.classList.remove(
        "mostrar"
    );


    caixaAlternativas.classList.remove(
        "mostrar"
    );


    caixaResultado.classList.add(
        "mostrar"
    );

}



/* JOGAR NOVAMENTE */

botaoJogarNovamente.addEventListener(
    "click",
    jogaNovamente
);



function jogaNovamente() {

    atual = 0;

    historiaFinal = "";


    caixaResultado.classList.remove(
        "mostrar"
    );


    caixaPerguntas.classList.add(
        "mostrar"
    );


    caixaAlternativas.classList.add(
        "mostrar"
    );


    mostraPergunta();

}