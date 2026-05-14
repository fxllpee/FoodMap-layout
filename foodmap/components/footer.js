/* =====================================================
   FOODMAP — components/footer.js
   ===================================================== */

const Footer = {
  render() {
    const el = document.getElementById('footer');
    if (!el) return;

    el.innerHTML = `
      <footer class="footer">
        <div class="container footer__inner">

          <div class="footer__brand">
            <a href="../index.html" class="navbar__logo">
              <span>🌱</span>
              <span class="navbar__logo-text">FoodMap</span>
            </a>
            <p class="body-md text-muted" style="margin-top: var(--space-md); max-width: 280px;">
              Conectando quem tem com quem precisa. Combatendo o desperdício, nutrindo comunidades.
            </p>
          </div>

          <div class="footer__links">
            <div class="footer__col">
              <p class="label-md" style="color: var(--color-on-surface); margin-bottom: var(--space-md);">Plataforma</p>
              <a href="./mapa.html" class="footer__link">Mapa de Doações</a>
              <a href="./como-funciona.html" class="footer__link">Como Funciona</a>
              <a href="./mapa.html" class="footer__link">Quero Doar</a>
              <a href="./mapa.html" class="footer__link">Buscar Alimentos</a>
            </div>
            <div class="footer__col">
              <p class="label-md" style="color: var(--color-on-surface); margin-bottom: var(--space-md);">Institucional</p>
              <a href="./institucional.html" class="footer__link">Sobre Nós</a>
              <a href="./institucional.html" class="footer__link">Impacto Social</a>
              <a href="./institucional.html" class="footer__link">Transparência</a>
              <a href="./contato.html" class="footer__link">Parcerias</a>
            </div>
            <div class="footer__col">
              <p class="label-md" style="color: var(--color-on-surface); margin-bottom: var(--space-md);">Contato</p>
              <a href="./contato.html" class="footer__link">Fale Conosco</a>
              <a href="mailto:contato@foodmap.org.br" class="footer__link">contato@foodmap.org.br</a>
            </div>
          </div>

        </div>

        <div class="footer__bottom">
          <div class="container" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap: var(--space-md);">
            <p class="label-sm text-muted">© 2025 FoodMap. Todos os direitos reservados.</p>
            <div style="display:flex; gap: var(--space-md);">
              <span class="badge">ODS 2 — Fome Zero</span>
              <span class="badge">ODS 12 — Consumo Responsável</span>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
};
