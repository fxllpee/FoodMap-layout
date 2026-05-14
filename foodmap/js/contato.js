/* =====================================================
   FOODMAP — js/contato.js
   ===================================================== */

const Contato = {

  cards: [
    { icon: '📧', title: 'E-mail geral',    value: 'contato@foodmap.org.br',  link: 'mailto:contato@foodmap.org.br' },
    { icon: '🤝', title: 'Parcerias',        value: 'parcerias@foodmap.org.br', link: 'mailto:parcerias@foodmap.org.br' },
    { icon: '📰', title: 'Imprensa',         value: 'imprensa@foodmap.org.br',  link: 'mailto:imprensa@foodmap.org.br' },
    { icon: '💬', title: 'WhatsApp',         value: '(11) 99999-8888',          link: 'https://wa.me/5511999998888' },
  ],

  odsGoals: [
    { number: 2,  label: 'Fome Zero' },
    { number: 12, label: 'Consumo Responsável' },
    { number: 17, label: 'Parcerias' },
  ],

  faqs: [
    {
      question: 'Posso doar alimentos vencidos?',
      answer: 'Não. A plataforma aceita somente alimentos dentro do prazo de validade e em condições adequadas de conservação. Doações com validade próxima devem ser marcadas como urgentes.',
    },
    {
      question: 'Como as ONGs são verificadas na plataforma?',
      answer: 'Toda organização receptora passa por um processo de verificação de CNPJ, consulta de regularidade e análise documental pela equipe FoodMap antes de ser ativada.',
    },
    {
      question: 'Existe algum custo para usar o FoodMap?',
      answer: 'Não. A plataforma é totalmente gratuita tanto para doadores quanto para receptores. Nos sustentamos através de parcerias institucionais e apoio de empresas parceiras.',
    },
  ],

  render() {
    this.renderCards();
    this.renderFaq();
    this.bindForm();
  },

  renderCards() {
    const el = document.getElementById('contatoCards');
    if (!el) return;

    const cardsHTML = this.cards.map(c => `
      <a href="${c.link}" class="card contato-card" target="_blank" rel="noopener">
        <span class="contato-card__icon">${c.icon}</span>
        <div>
          <p class="label-md" style="color: var(--color-on-surface);">${c.title}</p>
          <p class="body-md text-primary">${c.value}</p>
        </div>
      </a>
    `).join('');

    const odsHTML = `
      <div class="card ods-card">
        <p class="label-sm" style="text-transform:uppercase; letter-spacing:0.08em; color: var(--color-outline); margin-bottom: var(--space-md);">Alinhado aos ODS da ONU</p>
        <div style="display:flex; gap: var(--space-sm); flex-wrap: wrap;">
          ${this.odsGoals.map(o => `
            <div class="ods-badge">
              <strong>${o.number}</strong>
              <span>${o.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    el.innerHTML = cardsHTML + odsHTML;
  },

  renderFaq() {
    const el = document.getElementById('faqList');
    if (!el) return;

    el.innerHTML = this.faqs.map((f, i) => `
      <div class="faq-item">
        <button class="faq-question" onclick="Contato.toggleFaq(${i})">
          <span>${f.question}</span>
          <span class="faq-arrow" id="faqArrow${i}">▸</span>
        </button>
        <div class="faq-answer" id="faqAnswer${i}">
          <p class="body-md text-muted">${f.answer}</p>
        </div>
      </div>
    `).join('');
  },

  toggleFaq(index) {
    const answer = document.getElementById(`faqAnswer${index}`);
    const arrow  = document.getElementById(`faqArrow${index}`);
    const isOpen = answer.classList.toggle('faq-answer--open');
    arrow.textContent = isOpen ? '▾' : '▸';
  },

  bindForm() {
    const form = document.getElementById('contatoForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.getElementById('formMsg');

      // TODO: substituir por fetch() para endpoint real
      msg.style.display = 'block';
      msg.style.color = 'var(--color-primary)';
      msg.textContent = '✅ Mensagem enviada com sucesso! Retornaremos em até 2 dias úteis.';
      form.reset();
    });
  }
};
