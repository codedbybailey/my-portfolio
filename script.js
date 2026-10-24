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


// Flower follows the scroll gently, inspired by React Bits' layered motion.
// GSAP ScrollTrigger provides scroll-linked movement without converting to React.
(() => {
  const flower = document.querySelector('.about-art');
  const section = document.querySelector('.about-section');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!flower || !section || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  // Desktop only: mobile uses static art to avoid obstructing text.
  mm.add('(min-width: 751px) and (prefers-reduced-motion: no-preference)', () => {
    const tween = gsap.fromTo(flower,
      { y: -12, rotation: -1.5 },
      {
        y: 112,
        rotation: 2.5,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.35,
          invalidateOnRefresh: true
        }
      }
    );
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  });
  // Lenis updates native scroll, which ScrollTrigger can observe automatically.
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
