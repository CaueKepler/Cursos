alert('Boas Vindas ao Jogo do número Secreto!');
numeroMaximo = 550;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}:`);
    if (numeroSecreto == chute) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O numero secreto é maior do que ${chute}`);
        }  else {
            alert(`O numero secreto é menor do que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, voce acertou! Numero Secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1) {
//    alert(`Parabéns, voce acertou! Numero Secreto: ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`Parabéns, voce acertou! Numero Secreto: ${numeroSecreto} com ${tentativas} tentativa`);
//}


