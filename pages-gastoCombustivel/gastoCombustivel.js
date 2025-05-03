let tempo = Number(prompt("Digite o tempo gasto na viagem (em horas):"));
let velocidade = Number(prompt("Digite a velocidade média (em km/h):"));

let distancia = tempo * velocidade;

let litrosNecessarios = distancia / 12;

console.log(litrosNecessarios.toFixed(3));
