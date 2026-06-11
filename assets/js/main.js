/* ===========================================================
   Gul Administratie — Premium Website JS
   - Scroll reveal (IntersectionObserver)
   - Mobile menu toggle
   - Respects prefers-reduced-motion
   =========================================================== */

(function () {
  'use strict';

  /* ----- Mobile nav toggle ----- */
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----- Scroll reveal (respects reduced motion) ----- */
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  var revealElements = document.querySelectorAll(
    '.index-row, .notice-block, .facts-column, .contact-records, .testimonial-tease'
  );

  revealElements.forEach(function (el) {
    el.classList.add('reveal');
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach(function (el) {
    observer.observe(el);
  });
})();