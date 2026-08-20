document.addEventListener('DOMContentLoaded', () => {

  // 1. Contador Animado dos Números de Prova Social
  const statCounters = document.querySelectorAll('.stats-count');
  statCounters.forEach(counter => {
    const target = parseInt(counter.getAttribute('num'), 10) || 0;
    let count = 0;
    const duration = 1200;
    const stepTime = Math.max(20, Math.floor(duration / (target || 1)));

    const timer = setInterval(() => {
      count += 1;
      if (count >= target) {
        if (target === 6) counter.innerText = `#6`;
        else if (target === 100) counter.innerText = `100%`;
        else counter.innerText = `+${target}`;
        clearInterval(timer);
      } else {
        if (target === 6) counter.innerText = `#${count}`;
        else if (target === 100) counter.innerText = `${count}%`;
        else counter.innerText = `+${count}`;
      }
    }, stepTime);
  });

  // 2. Carrossel de Depoimentos
  const slidesContainer = document.getElementById('carousel-slides');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (slidesContainer && prevBtn && nextBtn) {
    const totalSlides = slidesContainer.children.length;
    let currentIndex = 0;

    const updateSlide = () => {
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide();
    });
  }

});

// 2. Animação de Surgimento (Scroll Reveal) ao rolar a página
const revealElements = document.querySelectorAll('section, article');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    el.classList.add('reveal');
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Executa na primeira carga
