//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

// Salvando os nomes dos participantes do Amigo Secreto
let amigos = []

function adicionarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;

    if (!nomeAmigo){
        alert("Digite o nome do amigo");
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarlista();
}

// Função para imprimir os nomes dos participantes na tela

function atualizarlista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }

}

// Função para sortear o amigo secreto

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo adicional");
    return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
    
}