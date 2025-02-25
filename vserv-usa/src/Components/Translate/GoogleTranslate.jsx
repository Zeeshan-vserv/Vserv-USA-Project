import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,ur,es,de,ar,hi", 
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      // Hide Google branding and replace the icon
      const style = document.createElement("style");
      style.innerHTML = `
        .goog-te-gadget span, .goog-logo-link { display: none !important; }
        .goog-te-gadget { font-size: 0px !important; position: relative; display: inline-block; }
        .goog-te-combo { font-size: 16px !important; padding: 5px; border-radius: 5px; border: 1px solid #ccc; cursor: pointer; appearance: none; }
        .goog-te-combo::after { 
          content: '▼'; 
          font-size: 12px; 
          position: absolute; 
          right: 10px; 
          top: 50%; 
          transform: translateY(-50%);
          pointer-events: none;
        }
      `;
      document.head.appendChild(style);
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
