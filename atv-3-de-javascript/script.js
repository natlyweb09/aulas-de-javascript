// ===== NÃO APAGUE ESTA PARTE =====
// mostrar(texto) escreve uma linha na página.
// Na semana do DOM vocês vão entender como ela funciona.
function mostrar(texto) {
    const linha = document.createElement("p");
    linha.textContent = texto;
    document.getElementById("saida").appendChild(linha);
}
// ===== SEU CÓDIGO COMEÇA AQUI =====

let nota = Number(prompt("qual é a sua nota?"));
if (nota >= 9){
    mostrar("aprovado  com destaque!");
}else if (nota>= 6){
    mostrar  ("Aprovado");
}else {
    mostrar("Reprovado");
}