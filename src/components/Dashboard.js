import React from "react";
import { useLanguage } from "../language/LanguageProvider";
import { getLocalizedString } from "../language/localizedStrings";

export default function Dashboard() {
  const { language } = useLanguage();

  return (
    <section style={{padding: '1rem'}} aria-label="Dashboard">
      <h1>{getLocalizedString("dashboard.title", language)}</h1>
      <p>{getLocalizedString("dashboard.welcome", language)}</p>
      <h2>{getLocalizedString("dashboard.reports", language)}</h2>
      <ul>
        <li>{getLocalizedString("dashboard.report.sales", language)}</li>
        <li>{getLocalizedString("dashboard.report.marketing", language)}</li>
        <li>{getLocalizedString("dashboard.report.finance", language)}</li>
      </ul>
    </section>
  );
}
