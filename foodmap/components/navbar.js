/* =====================================================
   FOODMAP — components/navbar.js
   Injeta a TopNavBar em qualquer página.
   Uso: NavBar.render('mapa')   ← passa o id da página ativa
   ===================================================== */

const NavBar = {
  links: [
    { id: 'index',         label: 'Início',        href: '../index.html' },
    { id: 'mapa',          label: 'Mapa',           href: './mapa.html' },
    { id: 'como-funciona', label: 'Como Funciona',  href: './como-funciona.html' },
    { id: 'institucional', label: 'Institucional',  href: './institucional.html' },
    { id: 'contato',       label: 'Contato',        href: './contato.html' },
  ],

  render(activeId = '') {
    const linksHTML = this.links.map(link => `
      <a href="${link.href}"
         class="nav-link ${link.id === activeId ? 'nav-link--active' : ''}">
        ${link.label}
      </a>
    `).join('');

    const el = document.getElementById('navbar');
    if (!el) return;

    el.innerHTML = `
      <nav class="navbar">
        <div class="container navbar__inner">

          <!-- Logo -->
          <a href="../index.html" class="navbar__logo">
            <span class="navbar__logo-icon">🌱</span>
            <span class="navbar__logo-text">FoodMap</span>
          </a>

          <!-- Links desktop -->
          <div class="navbar__links" id="navLinks">
            ${linksHTML}
          </div>

          <!-- CTA desktop -->
          <div class="navbar__cta">
            <a href="./mapa.html" class="btn btn-primary" style="min-height:40px; padding: 0 20px; font-size:14px;">
              Quero Doar
            </a>
          </div>

          <!-- Hamburguer mobile -->
          <button class="navbar__hamburger" id="navToggle" aria-label="Abrir menu">
            <span></span><span></span><span></span>
          </button>

        </div>

        <!-- Menu mobile -->
        <div class="navbar__mobile" id="navMobile">
          ${linksHTML}
          <a href="./mapa.html" class="btn btn-primary" style="margin-top:8px;">Quero Doar</a>
        </div>
      </nav>
    `;

    // Toggle mobile menu
    document.getElementById('navToggle').addEventListener('click', () => {
      document.getElementById('navMobile').classList.toggle('navbar__mobile--open');
    });
  }
};
