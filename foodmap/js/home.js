/* =====================================================
   FOODMAP — js/home.js
   ===================================================== */

const Home = {

  stats: [
    { value: '12.400',  unit: 'kg',  label: 'Alimentos redistribuídos' },
    { value: '340',     unit: '+',   label: 'Doadores cadastrados'      },
    { value: '87',      unit: '',    label: 'ONGs parceiras'            },
    { value: '4.200',   unit: '',    label: 'Famílias atendidas'        },
  ],

  steps: [
    {
      number: '01',
      icon: '📍',
      title: 'Cadastre seu excedente',
      description: 'Restaurantes, supermercados e pessoas físicas cadastram alimentos disponíveis com localização e prazo.'
    },
    {
      number: '02',
      icon: '🗺️',
      title: 'O mapa conecta em tempo real',
      description: 'Nossa plataforma cruza oferta e demanda, mostrando as doações mais próximas de quem precisa.'
    },
    {
      number: '03',
      icon: '🤝',
      title: 'A coleta acontece',
      description: 'ONGs, voluntários ou o próprio receptor retiram os alimentos. Tudo registrado e rastreável.'
    },
  ],

  personas: [
    {
      name: 'Dona Maria',
      age: 52,
      role: 'Receptora',
      location: 'Brasilândia, SP',
      quote: 'Antes eu não sabia onde buscar ajuda. Agora recebo uma notificação toda semana com o que tem perto de casa.',
      avatarEmoji: '👩🏾',
      badgeClass: '',
    },
    {
      name: 'Carlos Mendes',
      age: 41,
      role: 'Doador — Restaurante',
      location: 'Pinheiros, SP',
      quote: 'Todo fim de expediente eu lançava o que sobrou. Agora sei que vai para alguém que precisa, não para o lixo.',
      avatarEmoji: '👨🏽',
      badgeClass: '',
    },
  ],

  render() {
    this.renderStats();
    this.renderSteps();
    this.renderPersonas();
  },

  renderStats() {
    const el = document.getElementById('statsGrid');
    if (!el) return;
    el.innerHTML = this.stats.map(s => `
      <div class="stat-card card">
        <p class="stat-value">${s.value}<span class="stat-unit">${s.unit}</span></p>
        <p class="label-md text-muted">${s.label}</p>
      </div>
    `).join('');
  },

  renderSteps() {
    const el = document.getElementById('stepsGrid');
    if (!el) return;
    el.innerHTML = this.steps.map(s => `
      <div class="step-card">
        <div class="step-icon">${s.icon}</div>
        <p class="step-number label-sm text-primary">${s.number}</p>
        <h3 class="headline-md" style="margin: var(--space-sm) 0;">${s.title}</h3>
        <p class="body-md text-muted">${s.description}</p>
      </div>
    `).join('');
  },

  renderPersonas() {
    const el = document.getElementById('personasGrid');
    if (!el) return;
    el.innerHTML = this.personas.map(p => `
      <div class="persona-card card">
        <div class="persona-avatar">${p.avatarEmoji}</div>
        <div class="persona-info">
          <div style="display:flex; align-items:center; gap: var(--space-sm); margin-bottom: var(--space-sm);">
            <h3 class="headline-md">${p.name}</h3>
            <span class="badge">${p.role}</span>
          </div>
          <p class="label-md text-muted" style="margin-bottom: var(--space-md);">📍 ${p.location}</p>
          <blockquote class="persona-quote body-lg">"${p.quote}"</blockquote>
        </div>
      </div>
    `).join('');
  }
};
