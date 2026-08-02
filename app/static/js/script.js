/* ========================================================================
   FlowNest — Interactive Scripts
   Particles, flash dismiss, nav scroll, mobile toggle, password toggle
   ======================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ─── 1. FLOATING PARTICLES ────────────────────────────────────────
  const particlesContainer = document.querySelector('.particles');
  if (particlesContainer) {
    const PARTICLE_COUNT = 50;
    const colors = [
      'rgba(99, 102, 241, 0.7)',    // indigo — bright
      'rgba(129, 140, 248, 0.6)',   // lighter indigo
      'rgba(6, 182, 212, 0.6)',     // cyan
      'rgba(34, 197, 94, 0.5)',     // green
      'rgba(168, 85, 247, 0.5)',    // purple
      'rgba(236, 72, 153, 0.4)',    // pink
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');

      const size = Math.random() * 6 + 3;            // 3–9px
      const left = Math.random() * 100;               // 0–100%
      const duration = Math.random() * 18 + 8;        // 8–26s
      const delay = Math.random() * 10;               // 0–10s (shorter delay so they appear faster)
      const color = colors[Math.floor(Math.random() * colors.length)];

      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = left + '%';
      p.style.background = color;
      p.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      p.style.animationDuration = duration + 's';
      p.style.animationDelay = delay + 's';

      particlesContainer.appendChild(p);
    }
  }

  // ─── 2. AMBIENT GLOW ORBS ────────────────────────────────────────
  const bgAnimated = document.querySelector('.bg-animated');
  if (bgAnimated) {
    const orbData = [
      { color: 'rgba(99, 102, 241, 0.12)', size: 500, x: 15, y: 20, dur: 25 },
      { color: 'rgba(6, 182, 212, 0.10)',  size: 400, x: 75, y: 60, dur: 30 },
      { color: 'rgba(168, 85, 247, 0.08)', size: 350, x: 50, y: 80, dur: 22 },
      { color: 'rgba(236, 72, 153, 0.06)', size: 300, x: 85, y: 15, dur: 28 },
    ];
    orbData.forEach((o, i) => {
      const orb = document.createElement('div');
      orb.classList.add('glow-orb');
      orb.style.width = o.size + 'px';
      orb.style.height = o.size + 'px';
      orb.style.left = o.x + '%';
      orb.style.top = o.y + '%';
      orb.style.background = `radial-gradient(circle, ${o.color} 0%, transparent 70%)`;
      orb.style.animationDuration = o.dur + 's';
      orb.style.animationDelay = (i * 2) + 's';
      bgAnimated.appendChild(orb);
    });
  }


  // ─── 3. AUTO-DISMISS FLASH ALERTS ────────────────────────────────
  const alerts = document.querySelectorAll('.alert');
  alerts.forEach(alert => {
    setTimeout(() => {
      dismissAlert(alert);
    }, 5000);
  });

  document.querySelectorAll('.alert-dismiss').forEach(btn => {
    btn.addEventListener('click', () => {
      dismissAlert(btn.closest('.alert'));
    });
  });

  function dismissAlert(el) {
    if (!el || el.classList.contains('fade-out')) return;
    el.classList.add('fade-out');
    el.addEventListener('animationend', () => el.remove());
  }


  // ─── 4. NAVBAR SCROLL SHADOW ──────────────────────────────────────
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }


  // ─── 5. MOBILE NAV TOGGLE ────────────────────────────────────────
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle && navbar) {
    navToggle.addEventListener('click', () => {
      navbar.classList.toggle('nav-open');

      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        sidebar.classList.toggle('sidebar-open');
      }
    });
  }


  // ─── 6. PASSWORD VISIBILITY TOGGLE ───────────────────────────────
  document.querySelectorAll('.password-wrapper').forEach(wrapper => {
    const input = wrapper.querySelector('input');
    const toggle = wrapper.querySelector('.password-toggle');

    if (input && toggle) {
      toggle.addEventListener('click', () => {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';

        // Swap SVG icon
        const eyeOpen = toggle.querySelector('.eye-open');
        const eyeClosed = toggle.querySelector('.eye-closed');
        if (eyeOpen && eyeClosed) {
          eyeOpen.style.display = isPassword ? 'none' : 'block';
          eyeClosed.style.display = isPassword ? 'block' : 'none';
        }
      });
    }
  });


  // ─── 7. THEME TOGGLE (Dark ↔ Light) ──────────────────────────────
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('flownest-theme', newTheme);
    });
  }

});
