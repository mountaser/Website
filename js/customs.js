// MountaserHalak.com – small vanilla JS helpers (no dependencies)
(function () {
  'use strict';

  // Mobile navigation
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scroll reveal
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('visible'); });
  }

  // Language detection & persistence
  (function initLanguage() {
    var STORAGE_KEY = 'preferred_lang';
    var path = window.location.pathname;
    var isEnPage = path.indexOf('/en/') !== -1 || path.substr(-3) === '/en' || path.substr(-7) === '/en/';

    // Listen for manual language switcher clicks to save preference
    var langLinks = document.querySelectorAll('.lang-switcher a[data-lang]');
    for (var i = 0; i < langLinks.length; i++) {
      langLinks[i].addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
      });
    }

    // Auto-detect and redirect on first visit or based on saved preference
    try {
      var savedLang = localStorage.getItem(STORAGE_KEY);
      if (savedLang === 'en' && !isEnPage) {
        window.location.href = 'en/';
        return;
      }
      if (savedLang === 'de' && isEnPage) {
        window.location.href = '../';
        return;
      }
      if (!savedLang) {
        var userLangs = navigator.languages || [navigator.language || navigator.userLanguage || ''];
        var primaryLang = (userLangs[0] || '').toLowerCase();
        var isGerman = primaryLang.indexOf('de') === 0;
        if (!isGerman && !isEnPage) {
          window.location.href = 'en/';
        }
      }
    } catch (e) {
      // Fallback gracefully if localStorage is disabled
    }
  })();
})();
