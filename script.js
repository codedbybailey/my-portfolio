(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
  const hasGsap = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);
  if (!reduced && typeof Lenis !== 'undefined') {
    const lenis = new Lenis({ duration: 1.4, smoothWheel: true, wheelMultiplier: .9, anchors: { offset: -15 } });
    if (hasGsap) { lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(time => lenis.raf(time * 1000)); gsap.ticker.lagSmoothing(0); }
    else { const raf = time => {lenis.raf(time); requestAnimationFrame(raf)}; requestAnimationFrame(raf); }
  }
  // Fancy-inspired interactive perspective (native JS; no React runtime).
  if (!reduced && matchMedia('(hover:hover) and (pointer:fine)').matches) {
    document.querySelectorAll('.fancy-tilt').forEach(el => {
      let raf = 0;
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = `perspective(1100px) rotateX(${-y*4}deg) rotateY(${x*4}deg) scale(1.012)`;
        });
      });
      el.addEventListener('pointerleave', () => {
        cancelAnimationFrame(raf);
        el.style.transform = '';
      });
    });
    // React Bits-inspired magnetic button behavior, written for plain JS.
    document.querySelectorAll('.magnetic-link').forEach(el => {
      let raf = 0;
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left+r.width/2)) * .16;
        const dy = (e.clientY - (r.top+r.height/2)) * .16;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => { el.style.transform = `translate3d(${dx}px,${dy}px,0)`; });
      });
      el.addEventListener('pointerleave', () => {
        cancelAnimationFrame(raf);
        el.style.transform = '';
      });
    });
  }
  if (hasGsap && !reduced) {
    gsap.from('.title-line', { y: 95, opacity: 0, duration: 1.35, stagger: .13, ease: 'power3.out', delay: .1 });
    gsap.from('.hero-flower', { opacity: 0, scale: .85, rotate: 28, duration: 1.9, ease: 'power3.out', delay: .4 });
    gsap.from('.hero-top span', { y: 12, autoAlpha: 0, duration: .85, stagger: .12, ease: 'power2.out' });
    gsap.from('.hero-bottom', { y: 25, opacity: 0, duration: 1.2, delay: .85, ease: 'power2.out' });
    gsap.utils.toArray('.reveal').forEach(el => gsap.from(el, { y: 46, opacity: 0, duration: 1.1, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } }));
    gsap.fromTo('.statement-inner p', { filter: 'blur(9px)' }, {
      filter: 'blur(0px)', duration: 1.6, ease: 'power2.out',
      scrollTrigger: { trigger: '.statement', start: 'top 80%', once: true }
    });
    gsap.to('.hero-flower', { y: 85, rotate: 2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 } });
    gsap.to('.progress', { width: '100%', ease: 'none', scrollTrigger: { trigger: 'main', start: 'top top', end: 'bottom bottom', scrub: .3 } });
  } else if ('IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target)}}), {threshold:.08});
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }
})();
