// Função para preencher as estrelas
function updateStars(rating) {
    const stars = document.querySelectorAll('.rating i');  // Seleciona todas as estrelas
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value')); // Obtém o valor da estrela
        if (starValue <= rating) {
            star.classList.remove('bi-star'); // Remove a classe de estrela vazia
            star.classList.add('bi-star-fill'); // Adiciona a classe de estrela cheia
        } else {
            star.classList.remove('bi-star-fill'); // Remove a classe de estrela cheia
            star.classList.add('bi-star'); // Adiciona a classe de estrela vazia
        }
    });
}

// Exemplo: Preenche as estrelas com uma avaliação de 3
updateStars(3);

// Adiciona o evento de clique nas estrelas para alterar a avaliação
const stars = document.querySelectorAll('.rating i');
stars.forEach(star => {
    star.addEventListener('click', function() {
        const rating = parseInt(star.getAttribute('data-value'));  // Obtemos o valor da estrela clicada
        updateStars(rating);  // Atualiza as estrelas com a avaliação escolhida
    });
});

// Função para detectar o scroll e adicionar a animação
// Função de rolagem
function handleScrollAnimation() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { // Distância mínima de rolagem
            document.querySelector('.text-content5').classList.add('scroll-animation');
        } else {
            document.querySelector('.text-content5').classList.remove('scroll-animation');
        }
    });
}

// Função para preencher as estrelas
// Função de rolagem
function handleScrollAnimation() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { // Distância mínima de rolagem
            document.querySelector('.text-content5').classList.add('scroll-animation');
        } else {
            document.querySelector('.text-content5').classList.remove('scroll-animation');
        }
    });
}

// Função para preencher as estrelas
function updateStars(rating) {
    const stars = document.querySelectorAll('.rating i');
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= rating) {
            star.classList.remove('bi-star');
            star.classList.add('bi-star-fill');
        } else {
            star.classList.remove('bi-star-fill');
            star.classList.add('bi-star');
        }
    });
}

// Função para adicionar eventos de clique nas estrelas
function addStarClickEvent() {
    const stars = document.querySelectorAll('.rating i');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(star.getAttribute('data-value'));
            updateStars(rating);
        });
    });
}

// Inicializando ambos os scripts
window.onload = function() {
    handleScrollAnimation();
    updateStars(3);  // Preenche as estrelas com uma avaliação de 3
    addStarClickEvent();
};


