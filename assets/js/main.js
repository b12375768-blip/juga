/* Copyright Awareness for Creators — shared behaviour */
(function () {
  var navToggle = document.querySelector('[data-nav-toggle]');
  var navMenu = document.querySelector('[data-nav-menu]');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function (e) {
      e.preventDefault();
      navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open') ? 'true' : 'false');
    });
    navMenu.addEventListener('click', function (e) {
      if (e.target.closest('a')) navMenu.classList.remove('open');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (!href || href.length < 2) return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = Object.fromEntries(new FormData(form).entries());
      var note = form.querySelector('[data-form-note]');
      if (note) {
        note.textContent =
          'Thanks ' + (data.name || 'there') +
          ' — your question about "' + (data.topic || 'copyright') +
          '" is noted. We reply to ' + (data.email || 'your inbox') + '.';
        note.style.display = 'block';
      }
      form.reset();
    });
  }

  var revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealables.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('in'); });
  }

  var toc = document.querySelector('[data-toc]');
  var article = document.querySelector('.prose');
  if (toc && article) {
    var headings = Array.prototype.filter.call(
      article.querySelectorAll('h2'),
      function (h) { return h.textContent.trim().length; }
    );
    if (headings.length > 1) {
      toc.innerHTML = '<b>On this page</b><ol>' +
        headings.map(function (h) {
          var id = h.id || h.textContent.trim().toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
          h.id = id;
          return '<li><a href="#' + id + '">' + h.textContent + '</a></li>';
        }).join('') +
        '</ol>';
      toc.style.display = '';
    } else {
      toc.style.display = 'none';
    }
  }
})();