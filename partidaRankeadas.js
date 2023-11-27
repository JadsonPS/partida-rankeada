/* 

 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

let valorVitoria = 503;
let valorDerrota = 450;

let saldoVitorias = saldoRankeadas(valorVitoria, valorDerrota);
let nivelDoJogador = calculoDeNivel(saldoVitorias);

function saldoRankeadas(vitorias, derrotas){
    return vitorias - derrotas
}

function calculoDeNivel(valorNivel) {
    let resultado;

    if(valorNivel <= 10){
        resultado = "Ferro"
    } else if((valorNivel >= 11) && (valorNivel <= 20)){
        resultado = "Bronze"
    } else if((valorNivel >= 21) && (valorNivel <= 50)){
        resultado = "Prata"
    } else if((valorNivel >= 51) && (valorNivel <= 80)){
        resultado = "Ouro"
    } else if((valorNivel >= 81) && (valorNivel <= 90)){
        resultado = "Diamante"
    } else if((valorNivel >= 91) && (valorNivel <= 100)){
        resultado = "Lendário"
    } else if(valorNivel >= 101){
        resultado = "Imortal"
    }

    return resultado
}

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivelDoJogador}`)