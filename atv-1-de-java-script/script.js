// ===== NÃO APAGUE ESTA PARTE =====
// mostrar(texto) escreve uma linha na página.
// Na semana do DOM vocês vão entender como ela funciona.
function mostrar(texto) {
    const linha = document.createElement("p");
    linha.textContent = texto;
    document.getElementById("saida").appendChild(linha);
}
// ===== SEU CÓDIGO COMEÇA AQUI =====

const nome = "Ana";
let idade = 16;
let turma = "2 ano A";

mostrar("meu nome é " + nome + " eu tenho " + idade + " anos e sou do " + turma );

mostrar("ano que vem terei " + (idade + 1));