let distancia = Number(prompt("Digite a distância percorrida (em Km):"));
let combustivel = Number(prompt("Digite o total de combustível gasto (em litros):"));

let consumoMedio = distancia / combustivel;

console.log(consumoMedio.toFixed(3) + " km/l");
