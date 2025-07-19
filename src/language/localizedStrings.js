const strings = {
  en: {
    "dashboard.title": "Dashboard",
    "dashboard.welcome": "Welcome to your SaaS dashboard!",
    "dashboard.reports": "Your Reports",
    "dashboard.report.sales": "Sales Overview",
    "dashboard.report.marketing": "Marketing Analytics",
    "dashboard.report.finance": "Financial Summary",
    "switcher.label": "Language",
  },
  es: {
    "dashboard.title": "Panel de control",
    "dashboard.welcome": "¡Bienvenido a tu panel SaaS!",
    "dashboard.reports": "Tus informes",
    "dashboard.report.sales": "Resumen de ventas",
    "dashboard.report.marketing": "Análisis de marketing",
    "dashboard.report.finance": "Resumen financiero",
    "switcher.label": "Idioma",
  }
};

export function getLocalizedString(key, lang) {
  if (strings[lang] && strings[lang][key]) {
    return strings[lang][key];
  }
  // fallback to English
  return strings.en[key] || key;
}
