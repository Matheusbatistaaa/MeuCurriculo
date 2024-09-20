const menuMobile = document.querySelector('.menu-mobile');
const canto = document.querySelector('.canto');
const main = document.querySelector('main');

menuMobile.addEventListener('click', () => {
    canto.classList.toggle('active'); // Mostra ou esconde a navbar
    if (canto.classList.contains('active')) {
        main.classList.remove('menu-active'); // Remove a classe se o menu está ativo
    } else {
        main.classList.add('menu-active'); // Adiciona a classe se o menu não está ativo
    }
});
