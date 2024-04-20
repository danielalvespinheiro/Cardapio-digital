// Definindo itens para cada categoria do cardápio
const cafeDaManhaItens = [
    { nome: "Pão de Queijo", preco: "R$ 5,00", imagem: "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita-840x560.jpg" },
    { nome: "Suco de Laranja Natural", preco: "R$ 6,00", imagem: "https://s2.glbimg.com/E1WXXtiXeTi1DyT5Y1O3uf2DICs=/e.glbimg.com/og/ed/f/original/2019/01/15/31617293018_896bf29d55_k.jpg" },
    { nome: "Café Expresso", preco: "R$ 3,50", imagem: "https://agorarn.com.br/wp-content/webp-express/webp-images/uploads/2022/07/pesquisa_cafe_coracao-930x524.jpg.webp" }
];

const almocoItens = [
    { nome: "Arroz e Feijão", preco: "R$ 12,00", imagem: "https://s2-receitas.glbimg.com/UBo35UkSyrr2TmATZppeMZ15L5I=/0x0:1280x800/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/T/G/cF1RSiRNOC5sPLLgj71Q/arroz-e-feijao.jpg" },
    { nome: "Frango Grelhado", preco: "R$ 15,00", imagem: "https://www.receitadevovo.com.br/_next/image?url=https%3A%2F%2Fd2qcpt1idvpipw.cloudfront.net%2Frecipes%2F2020%2F10%2Fpeito-de-frango-grelhado-e-molhadinho_25092018132100.jpg&w=1080&q=75" },
    { nome: "Salada Mista", preco: "R$ 8,00", imagem: "https://cdn.casaeculinaria.com/wp-content/uploads/2023/03/12121322/salada-verde-688x387.webp" }
];

const merendaItens = [
    { nome: "Frutas da Estação", preco: "R$ 4,00", imagem: "https://cdn-edoeg.nitrocdn.com/GlDtjFHtqhtsZVKduYRLWgHhhMVmLCld/assets/images/optimized/rev-db2e15a/terramel.com.br/wp-content/uploads/2021/12/e210555c-19d4-4b60-9f61-e5de23233374.jpg" },
    { nome: "Iogurte Natural", preco: "R$ 3,00", imagem: "https://s2-receitas.glbimg.com/c4vvU9yPpEDVnohtaJUmE7iG7Xw=/0x166:4208x2760/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/P/x/PhyoBeTsC7ifbUjfw0Bg/iogurte-grego.jpg" },
    { nome: "Granola", preco: "R$ 2,50", imagem: "https://emporioxingu.com/wp-content/uploads/2022/04/granola-completa-nova.jpg" }
];

const jantarItens = [
    { nome: "Sopa de Legumes", preco: "R$ 7,00", imagem: "https://assets.delirec.com/images%2FRrt4pEGbgPReOzRGb35FZ8cZgl02%2Frecipe%2F7ca6e040-e6ab-457b-a5f5-60840236b6c4-Sopa-simples-gallery-0" },
    { nome: "Sanduíche de Presunto e Queijo", preco: "R$ 6,00", imagem: "https://cravinghomecooked.com/wp-content/uploads/2023/07/grilled-cheese-1-13-750x938.jpg.webp" },
    { nome: "Salada Caesar", preco: "R$ 9,00", imagem: "https://img.cybercook.com.br/receitas/950/salada-cesar-com-camarao-840x480.jpeg?q=75" }
];

// Função para adicionar itens ao HTML
function adicionarItensAoMenu(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(item =>
        `<div class="item">
            <img src="${item.imagem}" alt="${item.nome}">
            <div class="item-details">
                <span class="item-name">${item.nome}</span>
                <span class="item-price">${item.preco}</span>
            </div>
        </div>`
    ).join('');
}

// Adicionando itens ao menu
adicionarItensAoMenu(cafeDaManhaItens, 'cafe-da-manha-items');
adicionarItensAoMenu(almocoItens, 'almoco-items');
adicionarItensAoMenu(merendaItens, 'merenda-items');
adicionarItensAoMenu(jantarItens, 'jantar-items');
