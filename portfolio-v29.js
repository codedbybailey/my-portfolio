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


// Top flower now uses the same softer magnetic-style motion as the bottom flower.
// It stays visually anchored and gently scales/nudges as the user scrolls through the About area.
(() => {
  const flower = document.querySelector('.about-art');
  const section = document.querySelector('.about-section');
  if (!flower || !section || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  // Desktop only: mobile keeps the art static to avoid covering text.
  mm.add('(min-width: 751px) and (prefers-reduced-motion: no-preference)', () => {
    gsap.set(flower, { transformOrigin: '100% 25%' });
    const tween = gsap.fromTo(
      flower,
      { x: 10, y: 14, scale: 0.95, rotation: -1.0, opacity: 0.97 },
      {
        x: 0,
        y: 0,
        scale: 1.035,
        rotation: 0.45,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.55,
          invalidateOnRefresh: true
        }
      }
    );
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  });
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
})();



// Bottom flower uses a subtle magnetic-style motion: anchored to the page bottom,
// gently scaling and nudging as the user scrolls toward the contact/footer area.
(() => {
  const flower = document.querySelector('.page-bottom-flower');
  const triggerSection = document.querySelector('#contact') || document.querySelector('footer');
  if (!flower || !triggerSection || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.set(flower, { transformOrigin: '100% 100%' });
    const tween = gsap.fromTo(
      flower,
      { x: 12, y: 18, scale: 0.92, rotation: -1.2, opacity: 0.96 },
      {
        x: 0,
        y: 0,
        scale: 1.03,
        rotation: 0.4,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerSection,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1.6,
          invalidateOnRefresh: true
        }
      }
    );
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  });
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
})();
