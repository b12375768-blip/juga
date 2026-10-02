/* Index-page-only privacy notice popup behaviour.
   Deliberately has NO escape hatch: no Escape key, no backdrop click, no close (x) button.
   The dialog can only be dismissed through one of the two CTA buttons, and the choice is
   remembered so the visitor is never shown it twice. */
(function () {
  'use strict';

  var KEY = 'cafc-consent-v1';
  var root = document.getElementById('consent');
  if (!root) return;

  var card = root.querySelector('.consent-card');
  var acceptBtn = document.getElementById('consent-accept');
  var closeBtn = document.getElementById('consent-close');
  if (!card || !acceptBtn || !closeBtn) return;

  function readChoice() {
    try { return window.localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function saveChoice(value) {
    try { window.localStorage.setItem(KEY, value); } catch (e) { /* private mode: show every visit */ }
  }

  var lastFocus = null;

  function focusables() {
    return Array.prototype.filter.call(
      card.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
      function (el) { return el.offsetParent !== null || el === document.activeElement; }
    );
  }

  function close(choice) {
    saveChoice(choice);
    root.hidden = true;
    document.body.classList.remove('consent-open');
    document.removeEventListener('keydown', onKeydown, true);
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  /* Keyboard trap: Tab cycles inside the dialog. Escape is intentionally ignored,
     because the notice may only be dismissed via its CTA buttons. */
  function onKeydown(e) {
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); return; }
    if (e.key !== 'Tab') return;
    var items = focusables();
    if (!items.length) return;
    var first = items[0];
    var last = items[items.length - 1];
    var active = document.activeElement;
    if (e.shiftKey && (active === first || !card.contains(active))) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault(); first.focus();
    }
  }

  function open() {
    lastFocus = document.activeElement;
    root.hidden = false;
    document.body.classList.add('consent-open');
    document.addEventListener('keydown', onKeydown, true);
    acceptBtn.focus();
  }

  acceptBtn.addEventListener('click', function () { close('accepted'); });
  closeBtn.addEventListener('click', function () { close('closed'); });

  /* Backdrop clicks and any click outside the card are swallowed on purpose. */
  root.addEventListener('mousedown', function (e) {
    if (!card.contains(e.target)) e.preventDefault();
  });

  if (readChoice()) {
    root.hidden = true;
  } else {
    open();
  }
})();