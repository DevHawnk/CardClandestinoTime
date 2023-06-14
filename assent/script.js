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




var sessions = document.querySelectorAll('.session');

function toggleSession(sessionId) {
    for (var i = 0; i < sessions.length; i++) {
        if (sessions[i].id === sessionId) {
            if (sessions[i].style.display === 'none') {
                sessions[i].style.display = 'flex';
            } else {
                sessions[i].style.display = 'none';
            }
        } else {
            sessions[i].style.display = 'none';
        }
    }
}
