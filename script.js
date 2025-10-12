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



  const produtos = document.querySelectorAll('.produto');
  const card = document.getElementById('card-detalhes');
  const fecharBtn = document.querySelector('.fechar');
  const cardNome = document.getElementById('card-nome');
  const cardDesc = document.getElementById('card-descricao');


  const infosCafe = {
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
    }
  
  };

  produtos.forEach(produto => {
    produto.addEventListener('click', () => {
      const alt = produto.querySelector('img').alt.toLowerCase();
      const info = infosCafe[alt];
      if (info) {
        cardNome.textContent = info.nome;
        cardDesc.textContent = info.descricao;
        card.style.display = 'flex';
      }
    });
  });


  fecharBtn.addEventListener('click', () => {
    card.style.display = 'none';
  });


  window.addEventListener('click', e => {
    if (e.target === card) {
      card.style.display = 'none';
    }
  });

