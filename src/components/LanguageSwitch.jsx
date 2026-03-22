import { useState, useEffect, useRef } from "react";
import "./LanguageSwitch.css";

function LanguageSwitch() {
  const [lang, setLang] = useState("मराठी");
  const [show, setShow] = useState(false);
  const comboRef = useRef(null);

  // Wait for Google Translate combo to appear
  useEffect(() => {
    const interval = setInterval(() => {
      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        comboRef.current = combo;
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const changeLanguage = (code, label) => {
    if (comboRef.current) {
      comboRef.current.value = code;
      comboRef.current.dispatchEvent(new Event("change"));
      setLang(label);
      setShow(false);
    }
  };

  const languages = [
    { code: "mr", label: "मराठी" },
    { code: "en", label: "English" },
  ];

  return (
    <div
      className="language-switch"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className="current-lang">{lang}</span>

      {show && (
        <div className="lang-dropdown">
          {languages
            .filter((l) => l.label !== lang)
            .map((l) => (
              <div key={l.code} onClick={() => changeLanguage(l.code, l.label)}>
                {l.label}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitch;