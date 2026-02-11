(function(){
  // Renders the saved daily menu from localStorage into the front page
  function escapeHtml(str){ return String(str||'').replace(/[&<>"]+/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' })[c] || c); }
  function formatDate(dateStr){ try { return new Date(dateStr).toLocaleDateString('es-ES',{weekday:'long',year:'numeric',month:'long',day:'numeric'}); } catch(e){ return dateStr || ''; } }

  function renderDailyMenu(menu){
    // Prefer the existing #daily-menu section if present in the main page
    const section = document.getElementById('daily-menu');
    let contentContainer = null;

    if (section) {
      // Preferimos un contenedor específicamente preparado para la vista previa
      contentContainer = section.querySelector('#mainMenuPreview') || section.querySelector('.daily-menu-content') || section.querySelector('.preview') || section.querySelector('.daily-menu-container');
      if (!menu) { section.style.display = 'none'; return; }
      section.style.display = '';
    } else {
      const container = document.getElementById('dailyMenuSection') || document.querySelector('.daily-menu-container');
      if(!container) return;
      if(!menu){ container.style.display = 'none'; return; }
      container.style.display = '';
      contentContainer = document.getElementById('dailyMenuContent') || container;
    }

    const date = menu.date || new Date().toISOString().split('T')[0];
    const price = menu.price || '';
    const includes = menu.includes || '';

    const firstList = (menu.first_courses||[])
      .map(d => escapeHtml(d.name || d.name_es || ''))
      .filter(Boolean)
      .map(n => `<li>${n}</li>`)
      .join('');

    const secondList = (menu.second_courses||[])
      .map(d => escapeHtml(d.name || d.name_es || ''))
      .filter(Boolean)
      .map(n => `<li>${n}</li>`)
      .join('');

    const supplements = (menu.supplements||[])
      .map(s => `<li>${escapeHtml(s.name)} — ${escapeHtml(s.price)}</li>`)
      .join('');

    const html = `
      <div class="preview-page">
        <header class="preview-header">
          <div class="menu-title">MENU CAN BUÏGAS</div>
          <div class="price-badge">${escapeHtml(price)}</div>
        </header>

        <div class="menu-container">
          <div class="menu-section">
            <div class="box-title">PRIMER PLATO</div>
            <ul class="menu-list">${firstList || '<li style="color:#999;font-style:italic">Sin primeros seleccionados</li>'}</ul>
          </div>

          <div class="menu-section">
            <div class="box-title">SEGUNDO PLATO</div>
            <ul class="menu-list">${secondList || '<li style="color:#999;font-style:italic">Sin segundos seleccionados</li>'}</ul>
          </div>

          ${supplements ? `<div class="menu-section"><div class="box-title">SUPLEMENTOS (por precio)</div><ul class="menu-list">${supplements}</ul></div>` : ''}
        </div>

        <footer class="menu-footer">
          <div class="includes"><strong>Incluye:</strong> ${escapeHtml(includes)}</div>
        </footer>
      </div>
    `;

    if (contentContainer) {
      contentContainer.innerHTML = html;
    }
  }

  function loadAndRenderDailyMenu(){
    const raw = localStorage.getItem('canbuigas_daily_menu');
    if(!raw){ renderDailyMenu(null); return; }
    try{ const menu = JSON.parse(raw); renderDailyMenu(menu); }catch(e){ console.warn('canbuigas: invalid daily menu', e); renderDailyMenu(null); }
  }

  window.addEventListener('DOMContentLoaded', loadAndRenderDailyMenu);
  window.addEventListener('storage', (e)=>{ if(e.key === 'canbuigas_daily_menu') loadAndRenderDailyMenu(); });

  // helper for manual reload/testing
  window.canBuigas = window.canBuigas || {};
  window.canBuigas.reloadDailyMenu = loadAndRenderDailyMenu;
})();