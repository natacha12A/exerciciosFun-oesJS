let pi = 3.14159;

function VolumeEsfera(raio) {
  let volume = (4.0 / 3) * pi * Math.pow(raio, 3);
  console.log("VOLUME = " + volume.toFixed(3));
}

let raio = parseFloat(prompt("Digite o raio da esfera:"));
VolumeEsfera(raio);
