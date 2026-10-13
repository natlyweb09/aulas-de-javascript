// ===== NÃO APAGUE ESTA PARTE =====
// mostrar(texto) escreve uma linha na página.
// Na semana do DOM vocês vão entender como ela funciona.
function mostrar(texto) {
    const linha = document.createElement("p");
    linha.textContent = texto;
    document.getElementById("saida").appendChild(linha);
}
// ===== SEU CÓDIGO COMEÇA AQUI =====

let aprovados = 0;

for (let i = 1; i <= 5; i++){
    let nota = Number(prompt("Digite a nota do aluno:" + i));


if (nota >= 6){
    aprovados++;
}
}

mostrar("aprovados: " + aprovados + " de 5");