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
