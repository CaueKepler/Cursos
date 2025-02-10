//function calcularIMC() {
//    let peso = parseFloat(prompt("Digite seu peso em kg:"));
//    let altura = parseFloat(prompt("Digite sua altura em metros:"));
//
//    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
//        alert("Por favor, insira valores válidos para peso e altura.");
//        return;
//    }
//
//    let imc = peso / (altura * altura);
//    let classificacao = "";
//
//    if (imc < 18.5) {
//        classificacao = "Abaixo do peso";
//    } else if (imc >= 18.5 && imc < 24.9) {
//        classificacao = "Peso normal";
//    } else if (imc >= 25 && imc < 29.9) {
//        classificacao = "Sobrepeso";
//    } else if (imc >= 30 && imc < 34.9) {
//        classificacao = "Obesidade grau 1";
//    } else if (imc >= 35 && imc < 39.9) {
//        classificacao = "Obesidade grau 2";
//    } else {
//        classificacao = "Obesidade grau 3 (mórbida)";
//    }
//
//    alert(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`);
//}
//
//calcularIMC();

//function converterDolar() {
//    let dolar = prompt('Qual o seu valor em dolar?')
//
//    let calculadora = dolar * 6
//
//    alert(`Seus ${dolar} valem ${calculadora} reais!`)
//}
//
//converterDolar()

// function mostrarTabuada() {
//     let numero = prompt("Digite um número para ver a tabuada:")
// 
//     alert(`Tabuada do ${numero}:`);
//     for (let i = 1; i <= 10; i++) {
//         alert(`${numero} x ${i} = ${numero * i}`);
//     }
// }
// 
// mostrarTabuada()

let listaGenerica = ['javaScrips', 'Java', 'Python'];

listaGenerica.push('Kotlin', 'Ruby', 'Golang')

alert(`${listaGenerica[1]}`)