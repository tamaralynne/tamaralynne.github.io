/* Slideshow galleries: prev/next buttons, arrow keys, swipe.
   Each [data-gallery] runs independently. Without JavaScript,
   the CSS falls back to showing every image stacked. */
(function () {
  document.documentElement.classList.remove('no-js');

  document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
    var slides = gallery.querySelectorAll('.gallery-slide');
    if (slides.length < 2) return;

    var counter = gallery.querySelector('.gallery-count');
    var index = 0;

    function show(n) {
      slides[index].classList.remove('is-active');
      slides[index].setAttribute('aria-hidden', 'true');
      index = (n + slides.length) % slides.length;
      slides[index].classList.add('is-active');
      slides[index].setAttribute('aria-hidden', 'false');
      if (counter) counter.textContent = (index + 1) + ' / ' + slides.length;
    }

    gallery.querySelector('.gallery-prev').addEventListener('click', function () { show(index - 1); });
    gallery.querySelector('.gallery-next').addEventListener('click', function () { show(index + 1); });

    // Arrow keys when the gallery (or a button in it) has focus
    gallery.setAttribute('tabindex', '0');
    gallery.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { show(index - 1); e.preventDefault(); }
      if (e.key === 'ArrowRight') { show(index + 1); e.preventDefault(); }
    });

    // Swipe on touch screens
    var startX = null;
    var stage = gallery.querySelector('.gallery-stage');
    stage.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) show(dx < 0 ? index + 1 : index - 1);
      startX = null;
    });

    // Optional autoplay: add data-autoplay="5000" to the gallery div.
    // Skipped for visitors who ask their system for reduced motion.
    var delay = parseInt(gallery.getAttribute('data-autoplay'), 10);
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (delay && !reduce) {
      var timer = setInterval(function () { show(index + 1); }, delay);
      gallery.addEventListener('pointerdown', function () { clearInterval(timer); }, { once: true });
      gallery.addEventListener('keydown', function () { clearInterval(timer); }, { once: true });
    }
  });
})();
