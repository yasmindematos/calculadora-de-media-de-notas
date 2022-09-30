function CalcularMedia() {
  var valor1 = document.getElementById("valor1");
  var media1 = parseFloat(valor1.value);
  var valor2 = document.getElementById("valor2");
  var media2 = parseFloat(valor2.value);
  var valor3 = document.getElementById("valor3");
  var media3 = parseFloat(valor3.value);
  var valor4 = document.getElementById("valor4");
  var media4 = parseFloat(valor4.value);

  var notaFinal = (media1 + media2 + media3 + media4) / 4;

  var notaFixada = notaFinal.toFixed(1);

  console.log(notaFixada);

  var MediaCalculada = document.getElementById("mediaCalculada");

  if (notaFixada >= 7) {
    MediaCalculada.innerHTML =
      "Sua Média Final é: " + notaFixada + "! Parabéns! Você conseguiu!";
  } else {
    MediaCalculada.innerHTML =
      "Sua média final foi: " + notaFixada + "! Ops, não passou!";
  }
}
