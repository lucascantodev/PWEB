const tbody = document.querySelector('tbody');
const botaoCarregarCervejas = document.querySelector('.botao-carregar-cervejas');
const botaoOrdenarCervejas = document.querySelector('.botao-ordenar-cervejas');
const botaoEmbaralharCervejas = document.querySelector('.botao-embaralhar-cervejas');

const cervejas = ['Stella', 'Guiness', 'Desesperados', 'Becks'];


function carregarCervejas() {
    tbody.innerHTML = '';
    cervejas.map((cerveja) => (tbody.innerHTML += `<tr><td>${cerveja}</td></tr>`));
}

function ordenarCervejas() {
    tbody.innerHTML = '';
    cervejas.sort().map((cerveja) => (tbody.innerHTML += `<tr><td>${cerveja}</td></tr>`));
}

function embaralharCervejas() {
    tbody.innerHTML = '';
    cervejas.sort(() => Math.random() - 0.5).map((cerveja) => (tbody.innerHTML += `<tr><td>${cerveja}</td></tr>`));
}

botaoCarregarCervejas.addEventListener('click', carregarCervejas);
botaoOrdenarCervejas.addEventListener('click', ordenarCervejas);
botaoEmbaralharCervejas.addEventListener('click', embaralharCervejas);