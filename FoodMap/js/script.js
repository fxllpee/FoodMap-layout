
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  var navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');
  window.scrollTo(0, 0);
}

function updateCounter(el) {
  var count = el.value.length;
  document.getElementById('charCount').textContent = count;
  if (count > 500) el.value = el.value.substring(0, 500);
}

// Map pill toggle
document.querySelectorAll('.map-pill').forEach(function(pill) {
  pill.addEventListener('click', function() {
    document.querySelectorAll('.map-pill').forEach(function(p) {
      p.className = p.className.replace('active', 'inactive');
    });
    this.className = this.className.replace('inactive', 'active');
  });
});
