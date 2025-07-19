import React from "react";
import Dashboard from "./components/Dashboard";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function App() {
  return (
    <div>
      <header style={{padding: '1rem', borderBottom: '1px solid #eee', marginBottom: '2rem'}}>
        <LanguageSwitcher />
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}
