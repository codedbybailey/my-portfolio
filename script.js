(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Smooth the document itself, without nested scrollers or section snapping.
  // A single RAF loop avoids competing with browser smooth scrolling.
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let lenis;
  let frame;

  function configureScrolling() {
    cancelAnimationFrame(frame);
    lenis?.destroy();
    lenis = undefined;
    if (motion.matches || typeof Lenis === 'undefined') return;

    lenis = new Lenis({
      lerp: 0.14,
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: false,
      anchors: true
    });
    const raf = time => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
  }

  configureScrolling();
  motion.addEventListener('change', configureScrolling);

  // Track the visible section, including when navigating with the wheel/keyboard.
  const links = [...document.querySelectorAll('.site-header nav a')];
  const targets = links.map(link => document.getElementById(link.hash.slice(1)));
  function updateNavigation() {
    let active = targets[0];
    for (const target of targets) {
      if (window.scrollY > 5 && target && target.getBoundingClientRect().top <= window.innerHeight * 0.35) {
        active = target;
      }
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      active = targets[targets.length - 1];
    }
    links.forEach((link, index) => {
      const selected = targets[index] === active;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', updateNavigation, { passive: true });
  window.addEventListener('resize', updateNavigation);
  updateNavigation();
})();
