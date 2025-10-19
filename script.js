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
    descricao: "Bebida quente e aromática, feita com misturas de frutas naturais.<br><br> <strong> Sabores: </strong> <br> Morango; <br> Limão; <br> Laranja; <br> Frutas vermelhas.",
  },

   chagelado: {
    nome: "Chá Gelado Especial",
    descricao: "Refrescante e leve, servido com gelo.<br><br> <strong> Sabores:</strong> <br> Limão; <br> Pêssego; <br> Maracujá; <br> Morango; <br> Laranja.",
  },

    chacomleite: {
    nome: "Chá Com Leite",
    descricao: "Bebida feita com chá mate quente misturado ao leite, resultando em sabor suave e cremoso.",
  },

 paodequeijo: {
    nome: "Pão De Queijo",
    descricao: "Tradicional quitute mineiro, macio e de sabor irresistível.",
  },

   croissantsimples: {
    nome: "Croissant Simples",
    descricao: "Massa folhada leve e amanteigada, assada até dourar.",
  },

   croissantrecheado: {
    nome: "Croissant Recheado",
    descricao: "Croissant crocante e amanteigado com recheio de sua escolha.<br><br> <strong>OPÇÕES:<br><br> Tradicionais:</strong> <br>Presunto e Queijo; <br>Queijo e Salame; <br>Frango com Catupiry; <br> Queijo e Tomate. <br><strong>Especiais: </strong> <br>Queijo Brie com Presunto cru e Geléia de Damasco; <br> Caprese; <br> Patê de Ricota e Alho-Poró.",
  },

   empada: {
    nome: "Empada",
    descricao: "Massa leve e amanteigada com recheio cremoso. <br> <br> <strong> OPÇÕES:</strong> <br> Frango com Requeijão; <br> Carne Seca com Catupiry; <br> Palmito; <br> Queijo com Alho-Poró.",
  },

   coxinha: {
    nome: "Coxinha",
    descricao: "Tradicional salgado brasileiro, com massa macia por dentro e frito até ficar crocante por fora. <br> <br> <strong> OPÇÕES:</strong> <br> Tradicional: Frango (Com ou Sem Catupiry);<br> Massa de Mandioca com recheio de Costela."
  },

   esfihaaberta: {
    nome: "Esfiha Aberta",
    descricao: "Massa leve e assada, moldada em formato aberto e servida quente. <br> <br> <strong> OPÇÕES: </strong> <br> Carne; <br> Queijo; <br> Frango; <br> Calabresa.",
  },

   esfihafechada: {
    nome: "Esfiha Fechada",
    descricao: "Massa macia e dourada, moldada em formato triangular e assada no forno. <br> <br> <strong>OPÇÕES: </strong> <br> Carne; <br> Frango; <br> Queijo e Presunto;",
  },

   tortasalgada: {
    nome: "Torta Salgada",
    descricao: "Massa leve e dourada com recheio cremoso de frango e requeijão.",
  },

   sanduiche: {
    nome: "Sanduíche Natural",
    descricao: "Pão leve e fresco com recheio equilibrado, ideal para uma refeição rápida e saudável. <br> <br> <strong>OPÇÕES:</strong> <br> Frango; <br> Peito de peru; <br> Atum; <br> Vegetariano <br> <strong>OBS: todos acompanham alface, tomate e queijo mussarela.</strong>",
  },

   tapioca: {
    nome: "Tapioca",
    descricao: "Massa leve feita de goma de mandioca, grelhada até ficar macia e levemente crocante. <br> <br> <strong>OPÇÕES: <br> Tradicionais:</strong> <br> Queijo; <br> Queijo e Presunto; <br> Frango com Requeijão; <br> Ovo com Queijo; <br> Atum com Maionese. <br> <strong>Especiais;</strong> <br> Tomate Seco com Manjericão; <br> Queijo Coalho com Mel; <br> Carne Seca com Requeijão. ",
  },
};

document.addEventListener('click', (e) => {
  const produto = e.target.closest('.produto');
  if (!produto) return;

  const alt = produto.querySelector('img')?.alt.toLowerCase().replace(/\s/g,''); 
  const info = infosProdutos[alt];
  if (info) {
    cardNome.textContent = info.nome;
    cardDesc.innerHTML = info.descricao;
    card.style.display = 'flex';
  }
});

fecharBtn.addEventListener('click', () => { card.style.display = 'none'; });
window.addEventListener('click', e => { if (e.target === card) card.style.display = 'none'; });
