(() => {
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let saved;
  try { saved = localStorage.getItem('theme'); } catch (_) {}
  if (saved !== 'light' && saved !== 'dark') saved = null;

  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    const button = document.querySelector('.theme-toggle');
    if (button) {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      const label = button.querySelector('.theme-label');
      if (label) label.textContent = nextTheme === 'dark' ? 'Dark' : 'Light';
      button.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
      button.hidden = false;
    }
  }
  const current = () => saved || (preference.matches ? 'dark' : 'light');
  apply(current());
  preference.addEventListener('change', () => { if (!saved) apply(current()); });
  document.addEventListener('DOMContentLoaded', () => {
    apply(current());
    document.querySelector('.theme-toggle')?.addEventListener('click', () => {
      saved = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('theme', saved); } catch (_) {}
      apply(saved);
    });
  });
})();
