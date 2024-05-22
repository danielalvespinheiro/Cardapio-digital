const cafeDaManhaItens = [
    { nome: "Mixto com ovo: ", descricao: "Sanduíche de presunto com ovo: ", preco: "R$ 8,00", imagem: "img/sanduiche.jpeg" },
    { nome: "Café preto: ", descricao: "Café preto, forte e quente: ", preco: "R$ 3,00", imagem: "img/cafe preto.png" }
];

const almocoItens = [
    { nome: "Bife a cavalo: ", descricao: "Bife com ovo e batatas fritas: ", preco: "R$ 18,00", imagem: "img/bife-a-cavalo.jpeg" },
    { nome: "Pirarucu: ", descricao: "Pirarucu frito: ", preco: "R$ 15,00", imagem: "img/pirarucu.jpeg" },
    { nome: "Bife acebolado: ", descricao: "Bife acebolado suculento: ", preco: "R$ 15,00", imagem: "img/bife-acebolado.jpeg" },
    { nome: "Calabresa acebolada: ", descricao: "Calabresa acebolada: ", preco: "R$ 12,00", imagem: "img/calabresa-acebolada.jpeg" }
];

const merendaItens = [
    { nome: "Salgados: ", descricao: "Salgados variados e fresquinhos: ", preco: "R$ 4,00", imagem: "img/salgado.jpeg" },
    { nome: "Kikão simples", descricao: "Kikão: ", preco: "R$ 5,00", imagem: "img/quicão.jpeg" },
    { nome: "Banana frita", descricao: "Banana frita crocante: ", preco: "R$ 5,00", imagem: "img/banana-frita-na-bandeija.jpeg" }
];

const jantarItens = [
    { nome: "Bandejas em geral", descricao: "Bandejas em geral: ", preco: "R$ 5,00", imagem: "img/bandeijas-em-geral.jpeg" },
    { nome: "Bolo de milho", descricao: "Bolo de milho fofinho: ", preco: "R$ 5,00", imagem: "img/bandejas-bolo-milho.jpeg" },
    { nome: "Cuscuz com banana", descricao: "Cuscuz com banana frita: ", preco: "R$ 5,00", imagem: "img/cuzcuz-babana-frita.jpeg" }
];

function adicionarItensAoMenu(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(item =>
        `<div class="item">
            <img src="${item.imagem}" alt="${item.nome}">
            <div class="item-details">
                <span class="item-description">${item.descricao}</span>
                <span class="item-price">${item.preco}</span>
            </div>
        </div>`
    ).join('');
}

adicionarItensAoMenu(cafeDaManhaItens, 'cafe-da-manha-items');
adicionarItensAoMenu(almocoItens, 'almoco-items');
adicionarItensAoMenu(merendaItens, 'merenda-items');
adicionarItensAoMenu(jantarItens, 'jantar-items');
