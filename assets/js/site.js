/* Paran Sonthalia — site interactions (vanilla, no build) */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Mobile nav toggle ─────────────────────────────────── */
  var nav = document.querySelector('.nav');
  var burger = document.querySelector('.nav__burger');
  var links = document.querySelector('.nav__links');
  if (burger && links && nav) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      nav.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Fade-up on first viewport entry ───────────────────── */
  var faders = document.querySelectorAll('.fade-up');
  if (faders.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      faders.forEach(function (el) { el.classList.add('in'); });
    } else {
      var fo = new IntersectionObserver(function (entries) {
        entries.forEach(function (ent) {
          if (ent.isIntersecting) { ent.target.classList.add('in'); fo.unobserve(ent.target); }
        });
      }, { rootMargin: '-50px' });
      faders.forEach(function (el) { fo.observe(el); });
    }
  }

  /* ── Active-section highlight in nav (home only) ───────── */
  var navLinks = document.querySelectorAll('.nav__links a[data-section]');
  if (navLinks.length && 'IntersectionObserver' in window) {
    var byId = {};
    navLinks.forEach(function (a) { byId[a.getAttribute('data-section')] = a; });
    var sections = [];
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) sections.push(el);
    });
    var setActive = function (id) {
      navLinks.forEach(function (a) {
        var on = a.getAttribute('data-section') === id;
        a.classList.toggle('active', on);
        if (on) { a.setAttribute('aria-current', 'true'); }
        else { a.removeAttribute('aria-current'); }
      });
    };
    var so = new IntersectionObserver(function (entries) {
      var vis = entries.filter(function (e) { return e.isIntersecting; })
        .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
      if (vis[0]) setActive(vis[0].target.id);
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.1, 0.3, 0.5] });
    sections.forEach(function (el) { so.observe(el); });
  }

  /* ── Hero parallax polaroids ───────────────────────────── */
  var photos = document.querySelectorAll('.hero__photo[data-rate]');
  if (photos.length && !reduceMotion) {
    var raf = 0;
    var apply = function () {
      var y = window.scrollY;
      photos.forEach(function (el) {
        if (window.innerWidth <= 900) { el.style.transform = ''; return; }
        var rate = parseFloat(el.getAttribute('data-rate')) || 0;
        el.style.transform = 'translateY(' + (-y * rate) + 'px)';
      });
      raf = 0;
    };
    window.addEventListener('scroll', function () {
      if (raf) return;
      raf = requestAnimationFrame(apply);
    }, { passive: true });
    apply();
  }

  /* ── Expand / collapse toggles ─────────────────────────── */
  document.querySelectorAll('[data-expand]').forEach(function (btn) {
    var sel = btn.getAttribute('data-expand');
    var items = document.querySelectorAll(sel);
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('data-state') === 'open';
      items.forEach(function (it) { it.classList.toggle('hidden', expanded); });
      btn.setAttribute('data-state', expanded ? 'closed' : 'open');
      btn.textContent = expanded ? btn.getAttribute('data-more') : btn.getAttribute('data-less');
    });
  });

  /* ── Contact form → mailto: hand-off ───────────────────── */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (form.elements.name && form.elements.name.value || '').trim();
      var email = (form.elements.email && form.elements.email.value || '').trim();
      var msg = (form.elements.message && form.elements.message.value || '').trim();
      if (!name || !email || !msg) return;
      var to = form.getAttribute('data-to');
      var subject = encodeURIComponent('Note from ' + name + ' via paransonthalia.com');
      var body = encodeURIComponent('From: ' + name + ' <' + email + '>\n\n' + msg);
      window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
      var btn = form.querySelector('.cform__submit');
      if (btn) { btn.classList.add('sent'); btn.textContent = '✓ off it goes!'; btn.disabled = true; }
    });
  }
})();
