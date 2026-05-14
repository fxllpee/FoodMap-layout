/* =====================================================
   FOODMAP — js/como-funciona.js
   ===================================================== */

const ComoFunciona = {

  steps: [
    {
      number: '01',
      icon: '👤',
      title: 'Crie sua conta',
      description: 'Cadastre-se como doador (restaurante, empresa ou pessoa física) ou como receptor (ONG, CRAS, família). O processo leva menos de 2 minutos.',
      detail: 'Validamos CNPJ ou CPF para garantir a segurança de todos na plataforma.',
      forWho: ['Doador', 'Receptor'],
    },
    {
      number: '02',
      icon: '📦',
      title: 'Cadastre os alimentos disponíveis',
      description: 'Informe o que você tem: tipo de alimento, quantidade, data de validade e localização para retirada.',
      detail: 'Você pode definir alertas de urgência quando o prazo de validade estiver próximo.',
      forWho: ['Doador'],
    },
    {
      number: '03',
      icon: '🗺️',
      title: 'Encontre no mapa',
      description: 'Receptores e voluntários visualizam em tempo real todos os pontos de doação próximos, com filtros por categoria e urgência.',
      detail: 'O mapa usa geolocalização para priorizar doações mais próximas de você.',
      forWho: ['Receptor', 'Voluntário'],
    },
    {
      number: '04',
      icon: '📲',
      title: 'Faça a reserva',
      description: 'Ao encontrar uma doação adequada, o receptor faz a reserva diretamente pela plataforma e combina a retirada com o doador.',
      detail: 'Notificações automáticas mantêm ambos os lados informados.',
      forWho: ['Receptor'],
    },
    {
      number: '05',
      icon: '🤝',
      title: 'A entrega acontece',
      description: 'O alimento é retirado ou entregue. Ambos confirmam a conclusão na plataforma.',
      detail: 'Cada doação concluída é registrada e contribui para o painel de impacto público.',
      forWho: ['Doador', 'Receptor'],
    },
    {
      number: '06',
      icon: '📊',
      title: 'Acompanhe o impacto',
      description: 'Visualize o histórico de doações, kg redistribuídos e famílias atendidas. Transparência total.',
      detail: 'Relatórios mensais são gerados automaticamente para doadores e parceiros.',
      forWho: ['Doador', 'Receptor', 'Parceiro'],
    },
  ],

  render() {
    const el = document.getElementById('cfSteps');
    if (!el) return;

    el.innerHTML = this.steps.map((s, i) => `
      <div class="cf-step ${i % 2 === 1 ? 'cf-step--reverse' : ''}">
        <div class="cf-step__visual">
          <div class="cf-step__icon">${s.icon}</div>
          <div class="cf-step__line ${i < this.steps.length - 1 ? '' : 'cf-step__line--hidden'}"></div>
        </div>
        <div class="cf-step__content card">
          <p class="label-sm text-primary" style="text-transform:uppercase; letter-spacing:0.08em; margin-bottom: var(--space-sm);">Passo ${s.number}</p>
          <h3 class="headline-md" style="margin-bottom: var(--space-md);">${s.title}</h3>
          <p class="body-lg text-muted" style="margin-bottom: var(--space-md);">${s.description}</p>
          <p class="body-md" style="color: var(--color-on-surface-variant); padding: var(--space-md); background: var(--color-surface-container-low); border-radius: var(--radius-md); margin-bottom: var(--space-md);">
            💡 ${s.detail}
          </p>
          <div style="display:flex; gap: var(--space-sm); flex-wrap: wrap;">
            ${s.forWho.map(w => `<span class="badge">${w}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }
};
