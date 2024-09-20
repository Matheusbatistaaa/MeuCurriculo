const menuMobile = document.querySelector('.menu-mobile');
const canto = document.querySelector('.canto');
const secoes = document.querySelectorAll('.secao'); // Seleciona todas as seções

menuMobile.addEventListener('click', () => {
    canto.classList.toggle('active'); // Mostra ou esconde a navbar
    if (canto.classList.contains('active')) {
        secoes.forEach(secao => secao.classList.remove('menu-active')); // Remove a classe de todas as seções
    } else {
        secoes.forEach(secao => secao.classList.add('menu-active')); // Adiciona a classe a todas as seções
    }
});
