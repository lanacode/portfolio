document.addEventListener('DOMContentLoaded', () => {

  // 1. Contador Animado para as Métricas
  const statCounters = document.querySelectorAll('.stats-count');
  statCounters.forEach(counter => {
    const target = parseInt(counter.getAttribute('num'), 10) || 0;
    let count = 0;
    const duration = 1200;
    const stepTime = Math.max(20, Math.floor(duration / (target || 1)));

    const timer = setInterval(() => {
      count += 1;
      if (count >= target) {
        if (target === 100) counter.innerText = `100%`;
        else counter.innerText = `+${target}`;
        clearInterval(timer);
      } else {
        if (target === 100) counter.innerText = `${count}%`;
        else counter.innerText = `+${count}`;
      }
    }, stepTime);
  });

  // 2. Filtro dos Cards de Projetos
  const filterButtons = document.querySelectorAll('.botao-filtro');
  const projectCards = document.querySelectorAll('.card-projeto');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'todos' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

});

document.addEventListener('DOMContentLoaded', () => {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  linksInternos.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      // Ignora links vazios ou apenas "#"
      if (targetId === '#' || targetId === '') return;

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault();
        
        const headerOffset = 80; // Altura do header fixo em pixels
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});