import { useEffect, useRef } from "react";

function Translator() {
  const translatorRef = useRef(null);

  useEffect(() => {
    // Google Translate initialization
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "mr",       // Default language
          includedLanguages: "mr,en",
          autoDisplay: true,        // Build the combo box
        },
        translatorRef.current
      );
    };

    // Load Google Translate script
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Keep hidden but present in DOM
  return (
    <div
      ref={translatorRef}
      style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
    ></div>
  );
}

export default Translator;