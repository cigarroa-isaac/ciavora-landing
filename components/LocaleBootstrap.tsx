/**
 * Inline script injected into <head>. Runs synchronously before React hydrates,
 * setting <html lang> and a data-locale attribute so the LocaleProvider's lazy
 * useState initializer picks the correct locale on the very first render.
 *
 * Without this, English-speaking visitors would briefly see Spanish strings
 * (the static export ships ES markup) before the swap.
 */
const bootstrapScript = `
(function () {
  try {
    var stored = null;
    try { stored = localStorage.getItem('ciavora-locale'); } catch (e) {}
    var locale;
    if (stored === 'es' || stored === 'en') {
      locale = stored;
    } else {
      var langs = (navigator.languages && navigator.languages.length)
        ? navigator.languages
        : [navigator.language || 'es'];
      locale = 'es';
      for (var i = 0; i < langs.length; i++) {
        if (langs[i] && langs[i].toLowerCase().indexOf('en') === 0) {
          locale = 'en';
          break;
        }
      }
    }
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
  } catch (e) {}
})();
`.trim();

export default function LocaleBootstrap() {
  return <script dangerouslySetInnerHTML={{ __html: bootstrapScript }} />;
}
