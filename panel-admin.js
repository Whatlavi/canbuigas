// panel-admin.js - Modular client-first admin panel (localStorage persistence)
const ADMIN_PASS = '1234'; // simple local prompt; replace with server auth later

// --- State ---
let menuDB = { first_courses: [], second_courses: [], desserts: [] };
let dailyMenu = { date: new Date().toISOString().split('T')[0], price: '25€', includes: '', first_courses: Array(4).fill({}), second_courses: Array(4).fill({}), desserts: Array(4).fill({}), supplements: [] };

// --- Utils ---
const qs = s => document.querySelector(s);
const qsa = s => document.querySelectorAll(s);

function showAlert(msg){ alert(msg); }

// --- Auth ---
function checkAuth(){
  const saved = localStorage.getItem('canbuigas_admin_hash');
  if (saved === btoa(ADMIN_PASS)) return true;
  const p = prompt('🔐 Contraseña de administración:');
  if (p === ADMIN_PASS){ localStorage.setItem('canbuigas_admin_hash', btoa(p)); return true; }
  showAlert('Acceso denegado'); window.location.href = 'index.html'; return false;
}

function logout(){ localStorage.removeItem('canbuigas_admin_hash'); window.location.href = 'index.html'; }

// --- Persistence ---
function saveDB(){ localStorage.setItem('canbuigas_menu_database', JSON.stringify(menuDB)); }
function loadDB(){ const s = localStorage.getItem('canbuigas_menu_database'); if (s) menuDB = JSON.parse(s); }

function saveDaily(){ localStorage.setItem('canbuigas_daily_menu', JSON.stringify(dailyMenu)); }
function loadDaily(){ const s = localStorage.getItem('canbuigas_daily_menu'); if (s) dailyMenu = JSON.parse(s); // ensure arrays exist
  dailyMenu.first_courses = dailyMenu.first_courses || Array(4).fill({});
  dailyMenu.second_courses = dailyMenu.second_courses || Array(4).fill({});
  dailyMenu.supplements = dailyMenu.supplements || [];
  // render supplements UI if present
  renderSupplementsUI();
} 

// --- UI helpers ---
function createSelectors(){
  const categories = ['first_courses','second_courses'];
  categories.forEach(category => {
    const containerId = category === 'first_courses' ? '#firstSelectors' : '#secondSelectors';
    const container = qs(containerId);
    container.innerHTML = '';
    for (let i=0;i<4;i++){
      const sel = document.createElement('select');
      sel.className = 'dish-selector';
      sel.dataset.category = category;
      sel.dataset.index = i;
      const empty = document.createElement('option'); empty.value=''; empty.textContent = `Seleccionar ${category.replace('_',' ')} ${i+1}...`;
      sel.appendChild(empty);
      sel.addEventListener('change', (e)=>{
        const id = e.target.value; selectDish(category, i, id);
      });
      container.appendChild(sel);
    }
  });
} 

function populateSelectors(){
  ['first_courses','second_courses'].forEach(category => {
    const selectors = document.querySelectorAll(`select[data-category='${category}']`);
    selectors.forEach(sel => {
      // remove old options
      while (sel.options.length>1) sel.remove(1);
      (menuDB[category]||[]).forEach(dish => {
        const opt = document.createElement('option'); opt.value = dish.id; opt.textContent = dish.name_es || dish.name || 'Sin nombre';
        const index = parseInt(sel.dataset.index);
        if (dailyMenu[category] && dailyMenu[category][index] && dailyMenu[category][index].id === dish.id) opt.selected = true;
        sel.appendChild(opt);
      });
    });
  });
} 

function getContainer(category){ return qs(category==='first_courses'?'#firstCoursesContainer':category==='second_courses'?'#secondCoursesContainer':'#dessertsContainer'); }

function updateDishCard(category,index){
  const container = getContainer(category);
  if (!container) return;
  let card = qs(`#${category}_card_${index}`);
  if (!card){ card = document.createElement('div'); card.id = `${category}_card_${index}`; card.className='compact-dish-card'; container.appendChild(card); }
  const dish = (dailyMenu[category] && dailyMenu[category][index]) ? dailyMenu[category][index] : {};
  if (dish && dish.name){
    card.innerHTML = ` <div class="compact-dish-image">${dish.image||'🍽️'}</div>
                      <div class="compact-dish-name">${dish.name}</div>
                      <div style="display:flex;gap:8px;margin-top:8px"><button class="small-btn" data-action="remove" data-cat="${category}" data-idx="${index}">Eliminar</button></div>`;
  } else {
    card.innerHTML = `<div class="compact-dish-image" style="background:#444;color:#666"><i class="fas fa-plus"></i></div><div class="compact-dish-name" style="color:#888">Vacío</div>`;
  }
}

function initializeAllCards(){ ['first_courses','second_courses'].forEach(cat=>{ for(let i=0;i<4;i++) updateDishCard(cat,i); }); }

// --- Select / menu logic ---
function selectDish(category,index,dishId){
  if (!dishId){ dailyMenu[category][index] = {}; updateDishCard(category,index); saveDaily(); return; }
  const dish = findDishById(parseInt(dishId));
  if (!dish){ showAlert('Plato no encontrado'); return; }
  dailyMenu[category][index] = { id: dish.id, name: dish.name_es||dish.name, image: dish.image||'🍽️' };
  updateDishCard(category,index); saveDaily();
}

function findDishById(id){ for(const cat in menuDB){ const d = menuDB[cat].find(x=>x.id===id); if (d) return d; } return null; }

// --- DB UI ---
function renderDB(){ const container = qs('#databaseDishes'); container.innerHTML=''; let total=0; for(const cat in menuDB){ menuDB[cat].forEach(d=>{ total++; const el = document.createElement('div'); el.className='compact-dish-card'; el.innerHTML=`<div class="compact-dish-image">${d.image||'🍽️'}</div><div class="compact-dish-name">${d.name_es||d.name}</div><div style="margin-top:8px;display:flex;gap:8px"><button class="small-btn" data-action="edit" data-id="${d.id}">Editar</button><button class="small-btn" data-action="delete" data-id="${d.id}">Eliminar</button></div>`; container.appendChild(el); }); }
  const info = document.createElement('div'); info.style.color='#888'; info.style.marginTop='8px'; info.textContent = `Total: ${total} platos`; container.appendChild(info);
}

function addNewDishFromForm(e){ e.preventDefault(); const cat = qs('#newDishCategory').value; const name = qs('#newDishNameEs').value.trim(); const img = qs('#newDishImage').value.trim() || '🍽️'; if(!name){ showAlert('Escribe un nombre'); return; } const newDish = { id: Date.now(), category: cat, name_es: name, image: img }; menuDB[cat].push(newDish); saveDB(); renderDB(); populateSelectors(); qs('#newDishNameEs').value=''; qs('#newDishImage').value=''; }

// --- Supplements ---
function renderSupplementsUI(){
  const container = qs('#supplementsContainer');
  container.innerHTML = '';
  (dailyMenu.supplements || []).forEach((s, i) => {
    const div = document.createElement('div'); div.className='supplement-item'; div.style.display='flex'; div.style.gap='8px'; div.style.marginBottom='8px';
    div.innerHTML = `<input class="supplement-name" placeholder="Ej: Copa de vino" value="${escapeHtml(s.name||'')}"><input class="supplement-price" placeholder="+4€" value="${escapeHtml(s.price||'')}"><button class="small-btn" data-action="remove-supp" data-idx="${i}">Eliminar</button>`;
    container.appendChild(div);
  });
}

function addSupplementRow(){
  dailyMenu.supplements = dailyMenu.supplements || [];
  dailyMenu.supplements.push({ name:'', price:'' });
  renderSupplementsUI();
}

function readSupplementsFromDOM(){
  const names = Array.from(document.querySelectorAll('.supplement-name'));
  const prices = Array.from(document.querySelectorAll('.supplement-price'));
  const arr = [];
  for (let i=0;i<names.length;i++){
    const n = names[i].value.trim(); const p = (prices[i] && prices[i].value.trim()) || '';
    if (n || p) arr.push({ name:n, price:p });
  }
  dailyMenu.supplements = arr;
}


function deleteDishById(id){ for(const cat in menuDB){ menuDB[cat] = menuDB[cat].filter(d=>d.id!==id); } saveDB(); renderDB(); populateSelectors(); }

// --- Preview / Print / Image ---
function escapeHtml(str){ return String(str||'').replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;" })[c]); }

function updatePreview(){
  const preview = qs('#menuPreview');
  const date = qs('#menuDate').value || dailyMenu.date;
  const price = qs('#menuPrice').value || dailyMenu.price;
  const includes = qs('#menuIncludes').value || dailyMenu.includes;
  // ensure latest supplements are read from UI
  readSupplementsFromDOM();

  const formatDate = new Date(date).toLocaleDateString('es-ES',{weekday:'long',year:'numeric',month:'long',day:'numeric'});

  const makeList = (arr, placeholder) => {
    const items = (arr || []).map(d => {
      let name = '';
      if (d && d.name) name = d.name;
      else if (d && d.name_es) name = d.name_es;
      else if (d && d.id) {
        const found = findDishById(d.id);
        if (found) name = found.name_es || found.name || '';
      }
      if (!name) return null;
      return `<li>${escapeHtml(name)}</li>`;
    }).filter(Boolean);
    if (items.length === 0) return `<li style="color:#999;font-style:italic">${escapeHtml(placeholder)}</li>`;
    return items.join('');
  };

  const supplementsHtml = (dailyMenu.supplements && dailyMenu.supplements.length>0) ?
    `<div class="menu-section"><div class="box-title">SUPLEMENTOS (por precio)</div><ul class="menu-list">${dailyMenu.supplements.map(s => `<li>${escapeHtml(s.name)} — ${escapeHtml(s.price)}</li>`).join('')}</ul></div>` : '';

  const html = `
    <div class="preview-page">
      <header class="preview-header">
        <div class="menu-title">MENU CAN BUÏGAS</div>
        <div class="price-badge">${escapeHtml(price)}</div>
      </header>

      <div class="menu-container">
        <div class="menu-section">
          <div class="box-title">PRIMER PLATO</div>
          <ul class="menu-list">${makeList(dailyMenu.first_courses, 'Sin primeros platos seleccionados')}</ul>
        </div>

        <div class="menu-section">
          <div class="box-title">SEGUNDO PLATO</div>
          <ul class="menu-list">${makeList(dailyMenu.second_courses, 'Sin segundos platos seleccionados')}</ul>
        </div>

        ${supplementsHtml}
      </div>

      <footer class="menu-footer">
        <div class="includes"><strong>Incluye:</strong> ${escapeHtml(includes)}</div>
      </footer>
    </div>
  `;

  preview.innerHTML = html;
} 

function openPrintPreview(){
  updatePreview();
  const win = window.open('', '_blank');
  // wrap with .preview so CSS rules like `.preview .preview-page` still match if present
  const doc = `<!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Menú - Can Buïgas</title>
    <link rel="stylesheet" href="panel-admin.css">
    <style>
      @media print{ body { -webkit-print-color-adjust: exact; } }
      html,body{height:100%;}
    </style>
  </head>
  <body>
    <div class="preview">${qs('#menuPreview').innerHTML}</div>
  </body>
  </html>`;

  win.document.open();
  win.document.write(doc);
  win.document.close();
  // let resources settle (longer wait to allow font and CSS)
  setTimeout(()=>{ try{ win.focus(); win.print(); }catch(e){ console.warn('print failed', e); } }, 1200);
}

// ELIMINA COMPLETAMENTE la función generateImage() y reemplázala con esto:

function downloadImage(){ 
  // Primero actualizamos la vista previa
  updatePreview();
  
  // Crear contenedor con medidas exactas A4
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '-9999px';
  container.style.left = '-9999px';
  container.style.width = '210mm';  // Ancho A4
  container.style.height = '297mm'; // Alto A4
  container.style.background = '#EFE6DC';
  container.style.padding = '15mm'; // Márgenes internos
  container.style.fontFamily = "'Playfair Display', serif";
  container.style.color = '#2b2b2b';
  container.style.boxSizing = 'border-box';
  
  // Copiar el contenido del menú
  container.innerHTML = qs('#menuPreview').innerHTML;
  
  // Aplicar estilos de impresión A4
  const previewPage = container.querySelector('.preview-page');
  if (previewPage) {
    previewPage.style.width = '100%';
    previewPage.style.height = '100%';
    previewPage.style.margin = '0';
    previewPage.style.padding = '0';
    previewPage.style.background = '#EFE6DC';
    previewPage.style.boxShadow = 'none';
    previewPage.style.borderRadius = '0';
    previewPage.style.boxSizing = 'border-box';
  }
  
  // Ajustar todos los elementos para tamaño A4 exacto
  const styles = {
    '.menu-title': {
      fontSize: '26px',
      marginBottom: '10px',
      letterSpacing: '2px',
      color: '#2b2b2b'
    },
    '.price-badge': {
      width: '90px',
      height: '90px',
      fontSize: '18px',
      transform: 'none',
      background: '#C2A97F',
      color: '#fff',
      borderRadius: '999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '700'
    },
    '.menu-section': {
      padding: '12px',
      marginBottom: '10px',
      background: '#fff',
      borderRadius: '6px',
      border: '2px solid rgba(200,180,150,0.6)'
    },
    '.box-title': {
      fontSize: '18px',
      marginBottom: '8px',
      fontWeight: '700',
      color: '#3b3b3b',
      textAlign: 'center'
    },
    '.menu-list li': {
      padding: '4px 0',
      fontSize: '13px',
      lineHeight: '1.3',
      color: '#2b2b2b'
    },
    '.menu-footer': {
      marginTop: '10px',
      fontSize: '12px',
      color: '#555',
      textAlign: 'center'
    },
    '.preview-header': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '15px'
    },
    '.menu-container': {
      maxHeight: 'calc(297mm - 50mm)',
      overflow: 'hidden'
    },
    '.menu-list': {
      listStyle: 'none',
      padding: '0',
      margin: '0',
      textAlign: 'center'
    }
  };
  
  // Aplicar todos los estilos
  Object.keys(styles).forEach(selector => {
    const elements = container.querySelectorAll(selector);
    elements.forEach(el => {
      Object.assign(el.style, styles[selector]);
    });
  });
  
  document.body.appendChild(container);
  
  // Configuración para imagen A4 exacta
  // 210mm = 793.7px a 96 DPI, pero para mejor calidad usamos 300 DPI
  // 210mm * 300/25.4 = 2480px (300 DPI)
  // 297mm * 300/25.4 = 3508px (300 DPI)
  const options = {
    scale: 2, // Escala para mejor calidad
    backgroundColor: '#EFE6DC',
    width: 1240,   // 210mm a 150 DPI (para archivo más manejable)
    height: 1754,  // 297mm a 150 DPI
    useCORS: true,
    logging: false,
    onclone: function(clonedDoc) {
      // Asegurar que en el clon también se mantengan las medidas
      const clonedContainer = clonedDoc.querySelector('div');
      if (clonedContainer) {
        clonedContainer.style.width = '210mm';
        clonedContainer.style.height = '297mm';
      }
    }
  };
  
  html2canvas(container, options).then(canvas => {
    // Crear imagen final con tamaño exacto A4 150 DPI
    const finalCanvas = document.createElement('canvas');
    finalCanvas.width = 1240;   // Ancho A4 150 DPI
    finalCanvas.height = 1754;  // Alto A4 150 DPI
    
    const ctx = finalCanvas.getContext('2d');
    // Fondo exacto
    ctx.fillStyle = '#EFE6DC';
    ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);
    
    // Dibujar el menú escalado al tamaño exacto
    ctx.drawImage(canvas, 0, 0, finalCanvas.width, finalCanvas.height);
    
    // Descargar la imagen
    const url = finalCanvas.toDataURL('image/png', 1.0);
    const date = qs('#menuDate').value || dailyMenu.date;
    const a = document.createElement('a'); 
    a.href = url; 
    a.download = `menu-${date}.png`; 
    
    // Limpiar
    document.body.removeChild(container);
    
    // Descargar
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    showAlert('✅ Imagen A4 descargada (1240×1754px, 150 DPI)');
    
  }).catch(error => {
    console.error('Error:', error);
    showAlert('Error al generar la imagen');
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  });
}

// --- Init / Event wiring ---
function init(){ if(!checkAuth()) return; loadDB(); loadDaily(); // UI
 qs('#menuDate').value = dailyMenu.date; qs('#menuPrice').value = dailyMenu.price; qs('#menuIncludes').value = dailyMenu.includes;
 createSelectors(); populateSelectors(); initializeAllCards(); renderDB(); updatePreview();
 // Tabs
 qsa('.tab-btn').forEach(b=> b.addEventListener('click', (e)=>{ qsa('.tab-btn').forEach(x=>x.classList.remove('active')); qsa('.tab-panel').forEach(p=>p.classList.remove('active')); b.classList.add('active'); qs(`#${b.dataset.target}`).classList.add('active'); }));
 // Form
 qs('#addDishForm').addEventListener('submit', addNewDishFromForm);
 // DB actions delegation
 qs('#databaseDishes').addEventListener('click', (e)=>{ const act = e.target.closest('[data-action]'); if(!act) return; const action = act.dataset.action; const id = parseInt(act.dataset.id); if(action==='delete') deleteDishById(id); if(action==='edit') {/* future */} });
 // Remove dish from card
 document.body.addEventListener('click', (e)=>{ const rem = e.target.closest('[data-action="remove"]'); if(!rem) return; const cat = rem.dataset.cat; const idx = parseInt(rem.dataset.idx); dailyMenu[cat][idx] = {}; updateDishCard(cat,idx); // reset selector
 const sel = document.querySelector(`select[data-category='${cat}'][data-index='${idx}']`); if(sel) sel.value=''; saveDaily(); }); // Supplements delegation
 document.body.addEventListener('click', (e)=>{ const sb = e.target.closest('[data-action="remove-supp"]'); if(sb){ const idx = parseInt(sb.dataset.idx); dailyMenu.supplements.splice(idx,1); renderSupplementsUI(); saveDaily(); } });
 // Add supplement button
 const addSuppBtn = qs('#addSupplementBtn'); if(addSuppBtn) addSuppBtn.addEventListener('click', ()=>{ addSupplementRow(); saveDaily(); }); // Actions
 qs('#saveMenuBtn').addEventListener('click', ()=>{ dailyMenu.date = qs('#menuDate').value; dailyMenu.price = qs('#menuPrice').value; dailyMenu.includes = qs('#menuIncludes').value; saveDaily(); showAlert('Menú guardado'); });
 qs('#previewBtn').addEventListener('click', updatePreview);
 qs('#downloadImageBtn').addEventListener('click', downloadImage);
 qs('#printBtn').addEventListener('click', openPrintPreview);
 qs('#logoutBtn').addEventListener('click', logout);
}

document.addEventListener('DOMContentLoaded', init);
