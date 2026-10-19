function mostrar(texto) {
    const linha = document.createElement("p");
    linha.textContent = texto;
    document.getElementById("saida").appendChild(linha);
}

//codigo começa aqui!!

let sorteado = Math.floor(Math.ramdom() * 20) + 1;