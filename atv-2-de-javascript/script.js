// ===== NÃO APAGUE ESTA PARTE =====
// mostrar(texto) escreve uma linha na página.
// Na semana do DOM vocês vão entender como ela funciona.
function mostrar(texto) {
    const linha = document.createElement("p");
    linha.textContent = texto;
    document.getElementById("saida").appendChild(linha);
}
// ===== SEU CÓDIGO COMEÇA AQUI =====

let salgados = Number(prompt ("quantos salgados vc quer?"));

let sucos = Number(prompt ("quantos sucos você quer?"));

let preço = (salgados * 3 + sucos * 2);

let itens = (sucos + salgados);

mostrar("total de itens: " + itens );

mostrar("valor total: " + preço);