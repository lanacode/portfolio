window.onload = function() {
    // Rola para o topo da página ao carregar
    window.scrollTo(0, 0);
};

document.querySelectorAll('.main__scroll').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = this.getAttribute('href'); // Obtém o ID do alvo
        const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

        // Rola suavemente até o elemento alvo
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Obtém o ID da seção

        // Oculta todas as seções
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });

        // Exibe a seção correspondente
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

// Função para mostrar a seção ao clicar nos cartões de serviços
document.querySelectorAll('.cards').forEach(card => {
    card.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');

        // Oculta todas as seções
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });

        // Exibe a seção correspondente
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});
