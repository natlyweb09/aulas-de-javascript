// ===== NÃO APAGUE ESTA PARTE =====
// mostrar(texto) escreve uma linha na página.
// Na semana do DOM vocês vão entender como ela funciona.
function mostrar(texto) {
    const linha = document.createElement("p");
    linha.textContent = texto;
    document.getElementById("saida").appendChild(linha);
}
// ===== SEU CÓDIGO COMEÇA AQUI =====

let numero = Number(prompt("Digite um numro para ver a sequencia:"))

let resultados = "";

for (let i = 1; i <= numero; i++){
    if (i > 1){
        resultados += ", "
    }
    if(i % 3 === 0 && i % 5 === 0){
        resultados += "FizzBuzz";
    }else if(i % 3 === 0){
        resultados += "Fizz";
    }else if(i % 5 === 0){
        resultados += "Buzz"
    }else{
        resultados += i;
    }
}


mostrar(resultados);