/* =====================================================
   FOODMAP — js/institucional.js
   ===================================================== */

const Institucional = {

  impactStats: [
    { value: '12.400', unit: 'kg',  label: 'Alimentos redistribuídos', icon: '🥦' },
    { value: '4.200',  unit: '',    label: 'Famílias atendidas',        icon: '👨‍👩‍👧' },
    { value: '340',    unit: '+',   label: 'Doadores ativos',           icon: '🏪' },
    { value: '87',     unit: '',    label: 'ONGs parceiras',            icon: '🤝' },
    { value: '98%',    unit: '',    label: 'Alimentos sem desperdício', icon: '♻️' },
    { value: '12',     unit: '',    label: 'Cidades cobertas',          icon: '📍' },
  ],

  transparency: [
    {
      title: 'Relatórios mensais públicos',
      description: 'Todos os relatórios de doações, impacto e financeiros são publicados mensalmente e acessíveis a qualquer pessoa.',
      icon: '📄',
    },
    {
      title: 'Rastreabilidade total',
      description: 'Cada doação possui um ID único que permite acompanhar todo o ciclo: do cadastro à entrega final.',
      icon: '🔍',
    },
    {
      title: 'Verificação de parceiros',
      description: 'Todas as ONGs e organizações receptoras passam por um processo de verificação com CNPJ e documentação.',
      icon: '✅',
    },
    {
      title: 'Dados abertos',
      description: 'Agregados anonimizados de impacto estão disponíveis via API pública para pesquisadores e jornalistas.',
      icon: '📊',
    },
  ],

  team: [
    { name: 'Ana Lima',      role: 'Fundadora & CEO',         emoji: '👩🏽' },
    { name: 'Rafael Torres', role: 'CTO',                     emoji: '👨🏻' },
    { name: 'Camila Souza',  role: 'Head de Impacto Social',  emoji: '👩🏾' },
    { name: 'Bruno Neves',   role: 'Head de Parcerias',       emoji: '👨🏽' },
  ],

  render() {
    this.renderImpact();
    this.renderTransparency();
    this.renderTeam();
  },

  renderImpact() {
    const el = document.getElementById('impactGrid');
    if (!el) return;
    el.innerHTML = this.impactStats.map(s => `
      <div class="card impact-card">
        <span class="impact-icon">${s.icon}</span>
        <p class="stat-value">${s.value}<span class="stat-unit">${s.unit}</span></p>
        <p class="label-md text-muted">${s.label}</p>
      </div>
    `).join('');
  },

  renderTransparency() {
    const el = document.getElementById('transparencyList');
    if (!el) return;
    el.innerHTML = this.transparency.map(t => `
      <div class="transparency-item">
        <div class="transparency-icon">${t.icon}</div>
        <div>
          <h3 class="headline-md" style="margin-bottom: var(--space-sm);">${t.title}</h3>
          <p class="body-md text-muted">${t.description}</p>
        </div>
      </div>
    `).join('');
  },

  renderTeam() {
    const el = document.getElementById('teamGrid');
    if (!el) return;
    el.innerHTML = this.team.map(m => `
      <div class="team-card card text-center">
        <div class="team-avatar">${m.emoji}</div>
        <h3 class="headline-md" style="margin: var(--space-md) 0 var(--space-xs);">${m.name}</h3>
        <p class="label-md text-muted">${m.role}</p>
      </div>
    `).join('');
  }
};
