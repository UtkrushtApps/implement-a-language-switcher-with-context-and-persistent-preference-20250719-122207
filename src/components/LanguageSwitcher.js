import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../language/LanguageProvider";
import { getLocalizedString } from "../language/localizedStrings";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" }
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef();
  const listRef = useRef();
  const itemRefs = useRef([]);

  useEffect(() => {
    if (open && listRef.current) {
      const idx = LANGUAGES.findIndex(l => l.code === language);
      itemRefs.current[idx]?.focus();
    }
  }, [open, language]);

  useEffect(() => {
    if (!open) return;
    function handleOutside(e) {
      if (
        !buttonRef.current.contains(e.target) &&
        !listRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  function handleKeyDown(e) {
    if (!open) return;
    const idx = LANGUAGES.findIndex(l => l.code === language);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (idx + 1) % LANGUAGES.length;
      itemRefs.current[next].focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (idx - 1 + LANGUAGES.length) % LANGUAGES.length;
      itemRefs.current[prev].focus();
    } else if (e.key === "Escape") {
      setOpen(false);
      buttonRef.current.focus();
    }
  }

  return (
    <nav aria-label="Language selector">
      <div style={{ position: "relative", display: "inline-block" }}>
        <button
          ref={buttonRef}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={getLocalizedString("switcher.label", language)}
          onClick={() => setOpen(o => !o)}
          onKeyDown={e => {
            if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
              setOpen(true);
            }
          }}
          style={{ padding: "0.5em 1em", borderRadius: "5px", border: "1px solid #eee", background: "#fff", cursor: "pointer" }}
        >
          {getLocalizedString("switcher.label", language)}: {LANGUAGES.find(l => l.code === language).label}
          <span aria-hidden="true" style={{marginLeft: 6}}>▼</span>
        </button>
        {open && (
          <ul
            ref={listRef}
            role="listbox"
            aria-label={getLocalizedString("switcher.label", language)}
            tabIndex="-1"
            style={{
              position: "absolute",
              left: 0,
              top: "2.5em",
              zIndex: 20,
              padding: 0,
              margin: 0,
              listStyle: "none",
              boxShadow: "0 2px 8px #ccc",
              background: "white",
              borderRadius: "5px",
              border: "1px solid #eee",
              minWidth: "140px"
            }}
            onKeyDown={handleKeyDown}
          >
            {LANGUAGES.map((lang, i) => (
              <li
                role="option"
                key={lang.code}
                aria-selected={lang.code === language}
                tabIndex={0}
                ref={el => (itemRefs.current[i] = el)}
                style={{
                  padding: "0.5em 1em",
                  background: lang.code === language ? "#f0f6ff" : "white",
                  cursor: "pointer"
                }}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                  buttonRef.current.focus();
                }}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    setLanguage(lang.code);
                    setOpen(false);
                    buttonRef.current.focus();
                  }
                }}
              >
                {lang.label}
                {lang.code === language ? " ✓" : ""}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
