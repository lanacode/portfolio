document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Filtro Dinâmico dos Projetos
  const filterBtns = document.querySelectorAll('#filtros button');
  const projectArticles = document.querySelectorAll('#projetos article');

  // Mapeamento de categorias baseado no texto do tag
  filterBtns.forEach(btn => {
    btn.classList.add('filter-btn'); // Aplica classe do CSS

    btn.addEventListener('click', () => {
      // Atualiza botão ativo
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.textContent.trim().toLowerCase();

      projectArticles.forEach(article => {
        const techTags = article.querySelector('p')?.textContent.toLowerCase() || '';

        if (filterValue === 'todos') {
          article.style.display = 'block';
        } else if (filterValue === 'full stack' && (techTags.includes('node') || techTags.includes('supabase'))) {
          article.style.display = 'block';
        } else if (filterValue === 'frontend / ui' && (techTags.includes('html') || techTags.includes('css'))) {
          article.style.display = 'block';
        } else if (filterValue === 'backend / ia' && (techTags.includes('openai') || techTags.includes('express'))) {
          article.style.display = 'block';
        } else {
          article.style.display = 'none';
        }
      });
    });
  });

  // Marca o primeiro filtro como ativo por padrão
  if (filterBtns.length > 0) filterBtns[0].classList.add('active');


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
});