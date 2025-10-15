const links = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.cardapio-section');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute('data-section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
  });
});


const card = document.getElementById('card-detalhes');
const fecharBtn = document.querySelector('.fechar');
const cardNome = document.getElementById('card-nome');
const cardDesc = document.getElementById('card-descricao');

const infosProdutos = {
  espresso: {
    nome: "Espresso",
    descricao: "Café forte e concentrado, preparado sob pressão. Perfeito para quem gosta de intensidade.",
  },
  coado: {
    nome: "Coado",
    descricao: "Clássico café filtrado, com sabor suave e aroma marcante. Ideal para acompanhar bolos e pães.",
  },
  cappuccino: {
    nome: "Cappuccino",
    descricao: "Mistura cremosa de café espresso, leite vaporizado e espuma de leite, com toque de canela.",
  },
  latte: {
    nome: "Latte",
    descricao: "Café espresso com grande quantidade de leite vaporizado e uma fina camada de espuma.",
  },
  lattegelado: {
    nome: "Latte Gelado",
    descricao: "Latte servido com gelo, refrescante e suave.",
  },
  macchiato: {
    nome: "Macchiato",
    descricao: "Espresso 'manchado' com um pouco de espuma de leite",
  },
  affogato: {
    nome: "Affogato",
    descricao: "Espresso servido sobre uma bola de sorvete. Opções: Baunilha, Chocolate, Caramelo",
  },
  cafegelado: {
    nome: "Café Gelado",
    descricao: "Café coado ou espresso servido com gelo, podendo ser adoçado ou simples",
  },
  chapreto: {
    nome: "Chá Preto",
    descricao: "Encorpado e aromático, pode ser servido puro ou com açúcar.",
  },
  chaverde: {
    nome: "Chá Verde",
    descricao: "Chá leve e refrescante, com notas herbais e rico em antioxidantes; pode ser adoçado com mel",
  },

  chamate: {
    nome: "Chá Mate",
    descricao: "Tradicional e revigorante, combina bem com mel ou um toque de limão",
  },

  chadecamomila: {
    nome: "Chá De Camomila",
    descricao: "Feito com flores secas, tem aroma suave e efeito calmante; pode ser adoçado com mel ou açúcar.",
  },

   chadehortela: {
    nome: "Chá De Hortelã",
    descricao: "Refrescante e aromático, feito com folhas frescas de hortelã, pode acompanhar mel ou açúcar.",
  },

   chainfusao: {
    nome: "Infusões De Frutas",
    descricao: "Bebida quente e aromática, feita com misturas de frutas naturais. Sabores: Morango, limão, laranja e frutas vermelhas.",
  },

   chagelado: {
    nome: "Chá Gelado Especial",
    descricao: "Refrescante e leve, servido com gelo. Sabores: limão, pêssego, maracujá, morango e laranja.",
  },

    chacomleite: {
    nome: "Chá Com Leite",
    descricao: "Bebida feita com chá mate quente misturado ao leite, resultando em sabor suave e cremoso.",
  },
};

document.addEventListener('click', (e) => {
  const produto = e.target.closest('.produto');
  if (!produto) return;

  const alt = produto.querySelector('img')?.alt.toLowerCase().replace(/\s/g,''); 
  const info = infosProdutos[alt];
  if (info) {
    cardNome.textContent = info.nome;
    cardDesc.textContent = info.descricao;
    card.style.display = 'flex';
  }
});

fecharBtn.addEventListener('click', () => { card.style.display = 'none'; });
window.addEventListener('click', e => { if (e.target === card) card.style.display = 'none'; });
