// Adicione a classe "flipped" ao card clicado
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Inicialize o swiper para cada card
const swipers = document.querySelectorAll('.swiper');
swipers.forEach((swiper) => {
    new Swiper(swiper, {
        navigation: {
            nextEl: swiper.querySelector('.swiper-button-next'),
            prevEl: swiper.querySelector('.swiper-button-prev'),
        },
        pagination: {
            el: swiper.querySelector('.swiper-pagination'),
            clickable: true,
        },
    });
});