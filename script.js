// Fade sections in on scroll and count up the headline numbers.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
function countUp(el) {
  const target = +el.dataset.count;
  if (reduce) { el.textContent = target; return; }
  const start = performance.now(), dur = 1200;
  (function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    e.target.querySelectorAll('[data-count]').forEach(countUp);
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal, .stats').forEach(el => io.observe(el));

// Light/dark toggle: remembers the choice; otherwise follows the device setting.
const root = document.documentElement, btn = document.getElementById('theme');
const current = () => root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
const paint = () => { btn.textContent = current() === 'dark' ? '☀' : '☾'; };
btn.addEventListener('click', () => {
  const next = current() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
  paint();
});
paint();
