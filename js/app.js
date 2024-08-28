let amigos = []; // Definindo a variável amigos globalmente para que possa ser acessada por outras funções

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }
    if (amigos.includes(amigo.value)){
        alert('Nome ja adicionado');
        return;
    }
    // Adiciona o nome do amigo ao array de amigos
    amigos.push(amigo.value);

    // Atualiza a lista de amigos exibida na página
    lista.textContent = amigos.join(', ');

    // Limpa o campo de entrada após adicionar o nome
    amigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos");
        return;
    }

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = ''; // Limpa o conteúdo anterior do sorteio

    // Sorteia os pares de amigos secretos
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

function reiniciar() {
    amigos = []; // Limpa o array de amigos
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
