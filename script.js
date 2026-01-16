const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(1);
    // Podemos utilizar essa fórmula também -> peso / Math.pow(altura, 2

    let classified = "";
    if (valorIMC < 18.5) {
      classified = "abaixo do peso.";
    } else if (valorIMC < 25) {
      classified = "com peso ideal. Parabéns!";
    } else if (valorIMC < 30) {
      classified = "levemente acima do peso.";
    } else if (valorIMC < 35) {
      classified = "com obesidade de grau I.";
    } else if (valorIMC < 40) {
      classified = "com obesidade grau II.";
    } else {
      classified = "com obesidade grau III. Cuidado!!";
    }
    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classified}`;
  } else {
    resultado.textContent = "Preencha todos os campos!";
  }
}

calcular.addEventListener("click", imc);
