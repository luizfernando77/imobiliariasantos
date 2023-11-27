
var dataFinal = new Date("2023-12-31T23:59:59").getTime();


var contador = setInterval(function() {
    var dataAtual = new Date().getTime();
    var diferenca = dataFinal - dataAtual;

    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    
    var tempoFormatado = "Tempo para o Final da Promoção: " + pad(horas) + "h " + pad(minutos) + "m " + pad(segundos) + "s";

    
    document.getElementById("contador").innerHTML = tempoFormatado;

    
    if (diferenca <= 0) {
        clearInterval(contador);
        document.getElementById("contador").innerHTML = "Promoção encerrada!";
    }
}, 1000);


function pad(numero) {
    return numero < 10 ? "0" + numero : numero;
}











