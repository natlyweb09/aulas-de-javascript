// ===== NÃO APAGUE ESTA PARTE =====
// mostrar(texto) escreve uma linha na página.
// Na semana do DOM vocês vão entender como ela funciona.
function mostrar(texto) {
    const linha = document.createElement("p");
    linha.textContent = texto;
    document.getElementById("saida").appendChild(linha);
}
// ===== SEU CÓDIGO COMEÇA AQUI =====


let numero = Number(prompt("Digite um número:"));

for (let i = 1; i <= 10; i++) {
    mostrar(numero + " x " + i + " = " + (numero * i));
}
