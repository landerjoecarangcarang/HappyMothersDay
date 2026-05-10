// Floating petals & hearts
(function () {
  const container = document.getElementById('petals');
  const HEART = '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="#e25c79"><path d="M12 21s-7-4.5-9.5-9C.8 8.5 2.5 4 6.5 4c2 0 3.5 1 4.5 2.5C12 5 13.5 4 15.5 4 19.5 4 21.2 8.5 19.5 12c-2.5 4.5-7.5 9-7.5 9z"/></svg>';
  const PETAL = '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="#f8c8d4"><ellipse cx="12" cy="12" rx="6" ry="10" transform="rotate(30 12 12)"/></svg>';
  for (let i = 0; i < 22; i++) {
    const el = document.createElement('div');
    el.className = 'petal';
    const size = 12 + Math.random() * 22;
    el.style.left = Math.random() * 100 + '%';
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.opacity = (0.4 + Math.random() * 0.5).toFixed(2);
    el.style.animationDuration = (12 + Math.random() * 18) + 's';
    el.style.animationDelay = (Math.random() * 15) + 's';
    el.innerHTML = Math.random() > 0.5 ? HEART : PETAL;
    container.appendChild(el);
  }
})();

// Sparkles in hero
(function () {
  const container = document.getElementById('sparkles');
  const SVG = '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor"><path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"/></svg>';
  for (let i = 0; i < 18; i++) {
    const el = document.createElement('div');
    el.className = 'sparkle';
    const size = 8 + Math.random() * 14;
    el.style.top = Math.random() * 100 + '%';
    el.style.left = Math.random() * 100 + '%';
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.animationDelay = (Math.random() * 3) + 's';
    el.innerHTML = SVG;
    container.appendChild(el);
  }
})();

// Greeting card flip
(function () {
  const card = document.getElementById('card');
  const toggle = () => card.classList.toggle('open');
  card.addEventListener('click', toggle);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  });
})();

// Gallery slider
(function () {
  const slides = document.querySelectorAll('.slide');
  const dotsWrap = document.getElementById('dots');
  let i = 0, timer;
  slides.forEach((_, idx) => {
    const d = document.createElement('button');
    d.className = 'dot' + (idx === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Slide ' + (idx + 1));
    d.addEventListener('click', () => go(idx));
    dotsWrap.appendChild(d);
  });
  const dots = dotsWrap.querySelectorAll('.dot');
  function go(n) {
    slides[i].classList.remove('active');
    dots[i].classList.remove('active');
    i = (n + slides.length) % slides.length;
    slides[i].classList.add('active');
    dots[i].classList.add('active');
    reset();
  }
  function next() { go(i + 1); }
  function prev() { go(i - 1); }
  function reset() { clearInterval(timer); timer = setInterval(next, 5000); }
  document.getElementById('next').addEventListener('click', next);
  document.getElementById('prev').addEventListener('click', prev);
  reset();
})();

// Reasons cards
(function () {
  const data = [
    { t: 'Endless Love', d: "Your love wraps around us like the warmest hug, every single day.", icon: '<path d="M12 21s-7-4.5-9.5-9C.8 8.5 2.5 4 6.5 4c2 0 3.5 1 4.5 2.5C12 5 13.5 4 15.5 4 19.5 4 21.2 8.5 19.5 12c-2.5 4.5-7.5 9-7.5 9z"/>' },
    { t: 'Our Sunshine', d: "You light up the darkest days with the gentleness of your smile.", icon: '<circle cx="12" cy="12" r="4" fill="white"/><g stroke="white" stroke-width="2" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.9" y1="4.9" x2="7" y2="7"/><line x1="17" y1="17" x2="19.1" y2="19.1"/><line x1="4.9" y1="19.1" x2="7" y2="17"/><line x1="17" y1="7" x2="19.1" y2="4.9"/></g>' },
    { t: 'First Teacher', d: "You taught us kindness, patience, and the strength to be ourselves.", icon: '<path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2V5z" fill="none" stroke="white" stroke-width="2"/><path d="M9 11s1 1 3 1 3-1 3-1" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>' },
    { t: 'Quiet Strength', d: "You carry the world for us with grace, never asking for anything in return.", icon: '<path d="M12 3l3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6L3 10l6-1z"/>' },
    { t: 'Magic Maker', d: "You turn ordinary moments into memories we'll cherish forever.", icon: '<path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z"/><circle cx="19" cy="18" r="1.5"/><circle cx="5" cy="19" r="1"/>' },
    { t: 'Forever Home', d: "No matter where we go, you are the place our hearts return to.", icon: '<path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H10v7H4a1 1 0 0 1-1-1V11z" fill="white"/>' }
  ];
  const wrap = document.getElementById('reasons');
  data.forEach((r) => {
    const el = document.createElement('div');
    el.className = 'reason';
    el.innerHTML = `
      <div class="icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="white">${r.icon}</svg></div>
      <h3>${r.t}</h3>
      <p>${r.d}</p>`;
    wrap.appendChild(el);
  });
})();

// Music
(function () {
  const btn = document.getElementById('musicToggle');
  const audio = document.getElementById('bgMusic');
  const label = document.getElementById('musicLabel');
  audio.volume = 0.35;
  let playing = false;
  btn.addEventListener('click', async () => {
    if (playing) { audio.pause(); playing = false; label.textContent = 'Play music'; }
    else {
      try { await audio.play(); playing = true; label.textContent = 'Playing'; }
      catch (e) { console.warn(e); }
    }
  });
})();
