let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute() {
    let cidade = prompt('Digite o nome de uma cidade no Brasil: ')
    alert(`Estive em ${cidade} e lembrei de voce`)
}