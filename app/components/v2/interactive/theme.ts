export function toggleTheme() {
  const el = document.documentElement;
  const next = el.dataset.theme === "light" ? "dark" : "light";
  el.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
}
