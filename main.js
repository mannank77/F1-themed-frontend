

// ===== Data =====

const drivers = [
  { pos: 1, name: 'Max Verstappen',  abbr: 'VER', team: 'Red Bull Racing',  pts: 51, color: '#3671C6' },
  { pos: 2, name: 'Lando Norris',    abbr: 'NOR', team: 'McLaren',           pts: 44, color: '#FF8000' },
  { pos: 3, name: 'Charles Leclerc', abbr: 'LEC', team: 'Ferrari',           pts: 37, color: '#E8002D' },
  { pos: 4, name: 'Lewis Hamilton',  abbr: 'HAM', team: 'Ferrari',           pts: 30, color: '#E8002D' },
  { pos: 5, name: 'George Russell',  abbr: 'RUS', team: 'Mercedes',          pts: 24, color: '#27F4D2' },
  { pos: 6, name: 'Carlos Sainz',    abbr: 'SAI', team: 'Williams',          pts: 18, color: '#64C4FF' },
  { pos: 7, name: 'Oscar Piastri',   abbr: 'PIA', team: 'McLaren',           pts: 14, color: '#FF8000' },
  { pos: 8, name: 'Fernando Alonso', abbr: 'ALO', team: 'Aston Martin',      pts: 10, color: '#229971' },
  { pos: 9, name: 'Lance Stroll',    abbr: 'STR', team: 'Aston Martin',      pts: 6,  color: '#229971' },
  { pos: 10, name: 'Nico Hulkenberg', abbr: 'HUL', team: 'Kick Sauber',     pts: 4,  color: '#52E252' },
];

const constructors = [
  { pos: 1, name: 'Red Bull Racing', pts: 87,  color: '#3671C6' },
  { pos: 2, name: 'Ferrari',         pts: 67,  color: '#E8002D' },
  { pos: 3, name: 'McLaren',         pts: 58,  color: '#FF8000' },
  { pos: 4, name: 'Mercedes',        pts: 31,  color: '#27F4D2' },
  { pos: 5, name: 'Aston Martin',    pts: 16,  color: '#229971' },
  { pos: 6, name: 'Williams',        pts: 18,  color: '#64C4FF' },
  { pos: 7, name: 'Kick Sauber',     pts: 4,   color: '#52E252' },
  { pos: 8, name: 'Haas',            pts: 2,   color: '#B6BABD' },
  { pos: 9, name: 'RB',              pts: 1,   color: '#6692FF' },
  { pos: 10, name: 'Alpine',         pts: 0,   color: '#0090FF' },
];

const races = [
  { round: 1,  name: 'Bahrain Grand Prix',       location: 'Sakhir',      date: 'Mar 16', status: 'done' },
  { round: 2,  name: 'Saudi Arabian Grand Prix', location: 'Jeddah',      date: 'Mar 23', status: 'next' },
  { round: 3,  name: 'Australian Grand Prix',    location: 'Melbourne',   date: 'Mar 30', status: 'upcoming' },
  { round: 4,  name: 'Japanese Grand Prix',      location: 'Suzuka',      date: 'Apr 6',  status: 'upcoming' },
  { round: 5,  name: 'Chinese Grand Prix',       location: 'Shanghai',    date: 'Apr 20', status: 'upcoming' },
  { round: 6,  name: 'Miami Grand Prix',         location: 'Miami',       date: 'May 4',  status: 'upcoming' },
  { round: 7,  name: 'Emilia Romagna Grand Prix',location: 'Imola',       date: 'May 18', status: 'upcoming' },
  { round: 8,  name: 'Monaco Grand Prix',        location: 'Monaco',      date: 'May 25', status: 'upcoming' },
  { round: 9,  name: 'Spanish Grand Prix',       location: 'Barcelona',   date: 'Jun 1',  status: 'upcoming' },
  { round: 10, name: 'Canadian Grand Prix',      location: 'Montréal',    date: 'Jun 15', status: 'upcoming' },
];

const teams = [
  { name: 'Red Bull Racing',  drivers: 'Verstappen · Tsunoda',  color: '#3671C6' },
  { name: 'Ferrari',          drivers: 'Leclerc · Hamilton',    color: '#E8002D' },
  { name: 'McLaren',          drivers: 'Norris · Piastri',      color: '#FF8000' },
  { name: 'Mercedes',         drivers: 'Russell · Antonelli',   color: '#27F4D2' },
  { name: 'Aston Martin',     drivers: 'Alonso · Stroll',       color: '#229971' },
  { name: 'Williams',         drivers: 'Sainz · Colapinto',     color: '#64C4FF' },
  { name: 'Kick Sauber',      drivers: 'Hulkenberg · Bortoleto',color: '#52E252' },
  { name: 'Haas',             drivers: 'Bearman · Ocon',        color: '#B6BABD' },
  { name: 'RB',               drivers: 'Lawson · Hadjar',       color: '#6692FF' },
  { name: 'Alpine',           drivers: 'Gasly · Doohan',        color: '#0090FF' },
];

// ===== Render Standings =====

function renderDriverStandings() {
  const tbody = document.getElementById('driver-standings');
  if (!tbody) return;
  tbody.innerHTML = drivers.map(d => `
    <tr>
      <td class="standings-pos ${d.pos <= 3 ? 'top3' : ''}">${d.pos}</td>
      <td>
        <span class="team-color-bar" style="background:${d.color}"></span>
        <span class="driver-name">${d.name}</span>
        <span class="driver-abbr">${d.abbr}</span>
      </td>
      <td style="color:#9c9c9c;font-size:13px">${d.team}</td>
      <td class="standings-pts pts-col">${d.pts}</td>
    </tr>
  `).join('');
}

function renderConstructorStandings() {
  const tbody = document.getElementById('constructor-standings');
  if (!tbody) return;
  tbody.innerHTML = constructors.map(c => `
    <tr>
      <td class="standings-pos ${c.pos <= 3 ? 'top3' : ''}">${c.pos}</td>
      <td>
        <span class="team-color-bar" style="background:${c.color}"></span>
        <span class="driver-name">${c.name}</span>
      </td>
      <td class="standings-pts pts-col">${c.pts}</td>
    </tr>
  `).join('');
}

// ===== Render Schedule =====

function renderSchedule() {
  const list = document.getElementById('schedule-list');
  if (!list) return;
  list.innerHTML = races.map(r => `
    <div class="schedule-item ${r.status}">
      <span class="schedule-round">R${r.round}</span>
      <span class="schedule-date">${r.date}</span>
      <div>
        <span class="schedule-name">${r.name}</span>
        <span class="schedule-location">${r.location}</span>
      </div>
      <span class="schedule-status">${r.status === 'done' ? 'Results' : r.status === 'next' ? 'Next' : ''}</span>
    </div>
  `).join('');
}

// ===== Render Teams =====

function renderTeams() {
  const grid = document.getElementById('teams-grid');
  if (!grid) return;
  grid.innerHTML = teams.map(t => `
    <div class="team-card">
      <div class="team-card__color" style="background:${t.color}"></div>
      <div class="team-card__name">${t.name}</div>
      <div class="team-card__drivers">${t.drivers}</div>
    </div>
  `).join('');
}

// ===== Tabs =====

function initTabs() {
  const btns = document.querySelectorAll('.tab-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    });
  });
}

// ===== Navbar scroll =====

function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 40
      ? 'rgba(13,13,13,1)'
      : 'rgba(13,13,13,0.96)';
  }, { passive: true });

  // Smooth nav link highlight on scroll
  const sections = ['latest', 'schedule', 'standings', 'teams'];
  const links = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ===== Hamburger =====

function initHamburger() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('open');
    });
  });
}

// ===== Countdown to next race =====

function initCountdown() {
  const target = new Date('2025-03-23T15:00:00Z');

  function update() {
    const diff = target - Date.now();
    if (diff <= 0) return;
    const days  = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins  = Math.floor((diff % 3600000) / 60000);
    const secs  = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    document.getElementById('cd-days').textContent  = pad(days);
    document.getElementById('cd-hours').textContent = pad(hours);
    document.getElementById('cd-mins').textContent  = pad(mins);
    document.getElementById('cd-secs').textContent  = pad(secs);
  }

  update();
  setInterval(update, 1000);
}

// ===== Ticker duplicate for seamless loop =====

function initTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;
  track.innerHTML += track.innerHTML;
}

// ===== Init =====

renderDriverStandings();
renderConstructorStandings();
renderSchedule();
renderTeams();
initTabs();
initNavbar();
initHamburger();
initCountdown();
initTicker();
