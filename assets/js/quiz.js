/* Creator Rights — Copyright Risk Check */
(function () {
  var QUESTIONS = [
    {
      q: 'Where do you plan to publish this video?',
      options: [
        { t: 'One platform only', ok: true, why: 'A single platform narrows the licensing question. Make sure your music licence actually covers that platform — library licences are often platform-specific.', link: 'music-licensing-basics.html' },
        { t: 'Every platform plus my website', ok: false, why: 'Every additional destination is another permission you need. Platform music libraries are frequently cleared for that platform only. Check each destination separately.', link: 'music-licensing-basics.html' },
        { t: 'A client or a brand’s account', ok: false, why: 'Client work is commercial, and often the client needs their own licence in their name. Confirm both the media licence permits commercial use and that it is transferable.', link: 'stock-footage-and-images.html' }
      ]
    },
    {
      q: 'What is the video monetised by?',
      options: [
        { t: 'Nothing — no ads, no sponsors', ok: true, why: 'Non-commercial use only helps within the fair use balance; it is not a licence. And you may monetise later. Judge the use on its own merits.', link: 'fair-use-basics.html' },
        { t: 'Platform ad revenue', ok: true, why: 'Commercial use needs a licence that permits commercial use. This is the single most common reason a "royalty-free" track gets claimed months later.', link: 'royalty-free-and-public-domain.html' },
        { t: 'Sponsors, paid memberships, or a paid product', ok: false, why: 'All of these are commercial, and a non-commercial or personal-use track does not cover them. Also check redistribution limits if the video sits in a paid course or template.', link: 'attributing-and-licensing-work.html' }
      ]
    },
    {
      q: 'Where did the music come from?',
      options: [
        { t: 'I bought a licence from a library I subscribe to', ok: true, why: 'The safest option. Confirm the licence covers this platform, commercial use, and your term — and save the licence file with the project.', link: 'stock-footage-and-images.html' },
        { t: 'An artist gave me permission', ok: true, why: 'Good route. Make sure the permission is written down and covers platforms, monetisation and term. A template is in the toolkit.', link: 'asking-for-permission.html' },
        { t: 'Another creator used it, or I found a "no copyright" pack', ok: false, why: 'You have no licence. Whoever uploaded it had no right to give you one. Find a properly licensed alternative before you publish.', link: 'royalty-free-and-public-domain.html' }
      ]
    },
    {
      q: 'How are you using copyrighted film, TV or other creators’ video?',
      options: [
        { t: 'Reviewing, critiquing or analysing it', ok: true, why: 'Criticism and comment are exactly what fair use protects. Use only the segments your analysis needs and make your contribution structural.', link: 'fair-use-basics.html' },
        { t: 'Parody or satire', ok: true, why: 'Parody is a recognised purpose — but it must actually comment on or ridicule the original, not just borrow its fame.', link: 'fair-use-basics.html' },
        { t: 'As background, atmosphere or "to fill the moment"', ok: false, why: 'Decorative use has no transformative purpose, and film clips stack several copyrights at once. Licence the footage or shoot your own B-roll.', link: 'using-movie-and-tv-clips.html' }
      ]
    },
    {
      q: 'What happens to the material you borrowed if the original were never seen by your viewers?',
      options: [
        { t: 'The video would fall apart — the clip is the content', ok: false, why: 'That is the definition of substitution, and it is the factor most likely to defeat a fair use argument. Rebuild the video around your own material.', link: 'fair-use-myths.html' },
        { t: 'The video would still work — the clip just supports a point', ok: true, why: 'This is the right shape. Your content carries the video and the borrowed material illustrates it.', link: 'fair-use-basics.html' },
        { t: 'It is only 5–10 seconds', ok: false, why: 'Duration alone decides nothing. There is no seconds rule — what matters is purpose, necessity and market effect.', link: 'fair-use-myths.html' }
      ]
    },
    {
      q: 'Your Content ID claim was rejected. What is the most useful thing to do?',
      options: [
        { t: 'Re-dispute with more evidence', ok: true, why: 'Repeat disputes with clear documentation are the normal route to resolution. Keep the licence, receipt or permission thread attached.', link: 'content-id-claims.html' },
        { t: 'Email the claimant directly with the licence', ok: true, why: 'Many claims are resolved off-platform within 48 hours once someone shows the paperwork.', link: 'content-id-claims.html' },
        { t: 'Delete the video and re-upload the same file', ok: false, why: 'That is the fastest way to turn a claim into a strike. Replace the offending element or obtain permission instead.', link: 'dmca-takedowns-and-strikes.html' }
      ]
    },
    {
      q: 'You received a DMCA notice about a video you believe is fair use. What happens next?',
      options: [
        { t: 'File a counter-notice, because the use is fair', ok: true, why: 'A counter-notice is the formal route, and it carries a sworn statement. Keep it factual and attach your reasoning — get advice if money or a channel is at stake.', link: 'dmca-takedowns-and-strikes.html' },
        { t: 'Ignore it and wait to see if anything happens', ok: false, why: 'Silence is treated as an admission. Deadlines pass, and unresolved notices accumulate as strikes.', link: 'dmca-takedowns-and-strikes.html' },
        { t: 'File a counter-notice on every video the claimant has flagged', ok: false, why: 'Counter-notices are sworn statements under penalty of perjury. Only file one where you are confident it is accurate.', link: 'dmca-takedowns-and-strikes.html' }
      ]
    },
    {
      q: 'Someone asks how to credit a track in your description. What do they need?',
      options: [
        { t: 'Artist name and track title', ok: false, why: 'Credit is not permission — it does not create a licence and does not defeat a claim. It satisfies licence terms, which is a separate thing.', link: 'attributing-and-licensing-work.html' },
        { t: 'Artist, track, source library, licence type and link', ok: true, why: 'This matches what libraries usually require and gives you a record you can find again in six months.', link: 'attributing-and-licensing-work.html' },
        { t: 'Nothing, since the licence already covers it', ok: true, why: 'Correct — but still check the licence, since many require attribution even when they grant permission.', link: 'attributing-and-licensing-work.html' }
      ]
    },
    {
      q: 'Before you publish, can you produce the licence for every third-party element in the video?',
      options: [
        { t: 'Yes — all of them, right now', ok: true, why: 'You are in the top few percent of creators. Keep a licence log so this is still true in a year.', link: 'pre-upload-checklist.html' },
        { t: 'Most of them', ok: false, why: 'The gap is where the claim will come from. Track down the missing ones or replace those elements before you publish.', link: 'pre-upload-checklist.html' },
        { t: 'I know where they came from but I do not have the paperwork', ok: false, why: 'A memory of a URL is not evidence. Save the licence file or the permission thread now, while it still exists.', link: 'pre-upload-checklist.html' }
      ]
    }
  ];

  var RISK = {
    low: { label: 'Low risk', color: 'var(--green)', advice: 'You have a clear licence trail and a defensible purpose. Two things still worth doing: log the licences, and re-check if the video becomes more commercial later.' },
    medium: { label: 'Medium risk', color: 'var(--amber)', advice: 'Nothing here is fatal, but a couple of answers point at gaps. Work through the linked guides before you publish — most of these are fifteen-minute fixes, and they are much cheaper now than after a claim.' },
    high: { label: 'High risk', color: 'var(--red)', advice: 'Several of your answers describe unlicensed or substitutive use. Do not publish this yet. Start with the licensing basics guide, then re-check your source material before it goes live.' }
  };

  var root = document.getElementById('riskcheck');
  if (!root) return;

  var answers = {};
  var done = false;

  var qs = QUESTIONS.map(function (item, qi) {
    return '<div class="quiz-q" data-q="' + qi + '">' +
      '<fieldset><legend>' + (qi + 1) + '. ' + item.q + '</legend>' +
      item.options.map(function (opt, oi) {
        return '<button type="button" class="opt" data-qi="' + qi + '" data-oi="' + oi + '">' + opt.t + '</button>';
      }).join('') +
      '<div class="explain"></div>' +
      '</fieldset></div>';
  }).join('');

  root.innerHTML =
    '<form id="rc-form" novalidate>' + qs +
    '<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:8px">' +
    '<button class="btn" type="button" id="rc-score">Show my risk level</button>' +
    '<button class="btn ghost" type="button" id="rc-reset">Start over</button>' +
    '</div></form>' +
    '<div class="quiz-result card" id="rc-result" aria-live="polite"></div>';

  var form = root.querySelector('#rc-form');
  var result = root.querySelector('#rc-result');

  function answerFor(qi, oi) {
    return QUESTIONS[qi].options[oi];
  }

  function reveal(qi, oi, chosen) {
    var block = root.querySelector('.quiz-q[data-q="' + qi + '"]');
    var opt = answerFor(qi, oi);
    block.querySelectorAll('.opt').forEach(function (btn) {
      var index = Number(btn.dataset.oi);
      btn.classList.add('locked');
      if (index === oi) btn.classList.add(chosen.ok ? 'correct' : 'wrong');
      else if (answerFor(qi, index).ok) btn.classList.add('correct');
      btn.disabled = true;
    });
    var explain = block.querySelector('.explain');
    explain.innerHTML =
      '<strong>' + (opt.ok ? 'Lower risk.' : 'Higher risk.') + '</strong> ' + opt.why +
      ' <a href="./posts/' + opt.link + '" style="color:var(--teal)">Read the guide →</a>';
    explain.classList.add('show');
  }

  form.addEventListener('click', function (e) {
    var btn = e.target.closest('.opt');
    if (!btn || btn.disabled) return;
    var qi = Number(btn.dataset.qi);
    var oi = Number(btn.dataset.oi);
    answers[qi] = oi;
    reveal(qi, oi, answerFor(qi, oi));
  });

  root.querySelector('#rc-score').addEventListener('click', function () {
    if (done) return;
    var answered = Object.keys(answers).length;
    if (answered < QUESTIONS.length) {
      root.querySelector('#rc-result').className = 'quiz-result card show';
      root.querySelector('#rc-result').innerHTML =
        '<h3 style="margin-top:0">Answer all ' + QUESTIONS.length + ' questions</h3>' +
        '<p style="color:var(--muted);margin:0">You have answered ' + answered + ' of ' + QUESTIONS.length +
        '. Scroll back up — each answer includes the specific reason and the guide that covers it.</p>';
      return;
    }

    var risky = QUESTIONS.filter(function (item, qi) { return answers[qi] === undefined || !item.options[answers[qi]].ok; }).length;
    var level = risky === 0 ? 'low' : risky <= 3 ? 'medium' : 'high';
    var data = RISK[level];
    var pct = Math.round((1 - risky / QUESTIONS.length) * 100);

    result.className = 'quiz-result card show';
    result.innerHTML =
      '<span class="eyebrow">Your result</span>' +
      '<div class="score" style="color:' + data.color + '">' + data.label + '</div>' +
      '<p style="color:var(--muted)">' + (QUESTIONS.length - risky) + ' of ' + QUESTIONS.length +
      ' answers point at a properly licensed, defensible use. ' + risky + ' point at a gap.</p>' +
      '<div class="quiz-bar"><i style="width:' + pct + '%"></i></div>' +
      '<p style="text-align:left">' + data.advice + '</p>' +
      '<div class="hero-cta" style="justify-content:center;margin-bottom:0">' +
      '<a class="btn" href="./posts/pre-upload-checklist.html">Run the 20-point checklist</a>' +
      '<a class="btn ghost" href="./blog.html">Read the 12 guides</a>' +
      '</div>';
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    done = true;
  });

  root.querySelector('#rc-reset').addEventListener('click', function () {
    location.reload();
  });
})();