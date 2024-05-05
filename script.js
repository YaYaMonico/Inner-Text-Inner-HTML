let elementoh1 = document.querySelector("h1");
let elementoa = document.querySelector("a");
let listaNaoOrdenada = document.querySelector('ul');
let listaOrdenada = document.getElementById('lista-ordenada');

console.log(elementoh1.innerText);
console.log(elementoa.innerHTML);

// Adicionando conteúdo textual aos elementos
elementoh1.innerText = "Inner Text & Inner HTML";
elementoa.innerText = "Link para o site da Proz Educação";

// Adicionando itens na lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens na lista ordenada com links
listaOrdenada.innerHTML = `
    <li><a href="https://agenciagov.ebc.com.br/noticias/202404/baleias-encantam-turistas-que-procuram-o-litoral-norte-de-sao-paulo-no-inverno">Item 1</a></li>
    <li><a href="https://tribunadonorte.com.br/rio-grande-do-norte/estudantes-do-rn-farao-intercambio-inedito-na-nasa/">Item 2</a></li>
    <li><a href="https://www.cnnbrasil.com.br/nacional/chuvas-no-rs-enxurrada-deixa-rastro-de-destruicao-em-lajeado-veja-imagens/">Item 3</a></li>
`;