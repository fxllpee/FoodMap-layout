/* =====================================================
   FOODMAP — js/mapa.js
   Lógica da página de mapa (Leaflet)
   ===================================================== */

const MapPage = {

  map: null,

  filters: ['Todos', 'Hortifruti', 'Grãos', 'Laticínios', 'Proteínas', 'Padaria', 'Urgente'],

  // Dados mockados — substituir por fetch() de API
  donations: [
    { id: 1, lat: -23.5505, lng: -46.6333, type: 'doador',  urgency: 'normal',  title: 'Restaurante Central',   items: 'Arroz, Feijão, Legumes', qty: '12 kg',  category: 'Grãos' },
    { id: 2, lat: -23.5570, lng: -46.6411, type: 'doador',  urgency: 'urgente', title: 'Padaria São Paulo',     items: 'Pães, Bolo integral',    qty: '8 kg',   category: 'Padaria' },
    { id: 3, lat: -23.5450, lng: -46.6250, type: 'receptor', urgency: 'normal', title: 'ONG Prato Cheio',      items: 'Aceita qualquer doação', qty: null,     category: 'Todos' },
    { id: 4, lat: -23.5620, lng: -46.6500, type: 'doador',  urgency: 'normal',  title: 'Supermercado Boa Vista', items: 'Frutas e verduras',    qty: '25 kg',  category: 'Hortifruti' },
    { id: 5, lat: -23.5480, lng: -46.6600, type: 'receptor', urgency: 'critico', title: 'CRAS Pinheiros',      items: 'Precisamos de alimentos', qty: null,    category: 'Todos' },
  ],

  init() {
    this.renderFilters();
    this.initMap();
    this.renderSidebar();
  },

  renderFilters() {
    const el = document.getElementById('mapaFilters');
    if (!el) return;

    el.innerHTML = this.filters.map((f, i) => `
      <button
        class="filter-chip ${i === 0 ? 'filter-chip--active' : ''}"
        data-filter="${f}"
        onclick="MapPage.setFilter(this, '${f}')"
      >${f}</button>
    `).join('');
  },

  setFilter(btn, filter) {
    document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('filter-chip--active'));
    btn.classList.add('filter-chip--active');
    // TODO: filtrar pins no mapa e sidebar
    console.log('Filtro ativo:', filter);
  },

  initMap() {
    this.map = L.map('map').setView([-23.5505, -46.6333], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(this.map);

    this.donations.forEach(d => this.addPin(d));
  },

  addPin(donation) {
    const color = donation.type === 'doador'
      ? (donation.urgency === 'urgente' || donation.urgency === 'critico' ? '#ba1a1a' : '#006b30')
      : '#006d33';

    const icon = L.divIcon({
      className: '',
      html: `<div style="
        width: 16px; height: 16px;
        background-color: ${color};
        border: 2.5px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0,0,0,0.25);
      "></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });

    const marker = L.marker([donation.lat, donation.lng], { icon }).addTo(this.map);
    marker.bindPopup(`
      <strong>${donation.title}</strong><br/>
      ${donation.items}<br/>
      ${donation.qty ? `<em>${donation.qty}</em>` : ''}
      ${donation.urgency !== 'normal' ? `<br/><span style="color:#ba1a1a; font-weight:600;">⚠ ${donation.urgency.toUpperCase()}</span>` : ''}
    `);
  },

  renderSidebar() {
    const el = document.getElementById('donationList');
    const countEl = document.getElementById('donationCount');
    if (!el) return;

    const doadores = this.donations.filter(d => d.type === 'doador');
    if (countEl) countEl.textContent = `${doadores.length} disponíveis`;

    el.innerHTML = doadores.map(d => `
      <div class="donation-card card" onclick="MapPage.focusPin(${d.lat}, ${d.lng})">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-sm);">
          <h3 class="label-md" style="color: var(--color-on-surface);">${d.title}</h3>
          ${d.urgency !== 'normal' ? `<span class="badge badge-urgent">⚠ Urgente</span>` : `<span class="badge">${d.category}</span>`}
        </div>
        <p class="body-md text-muted">${d.items}</p>
        ${d.qty ? `<p class="label-sm text-primary" style="margin-top: var(--space-sm);">📦 ${d.qty} disponíveis</p>` : ''}
      </div>
    `).join('');
  },

  focusPin(lat, lng) {
    this.map.setView([lat, lng], 16);
  }
};
