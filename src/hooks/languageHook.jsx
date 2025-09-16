import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setLanguage(lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "ar";
    if (i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
    setLanguage(savedLang);
  }, [i18n]);

  return { language, changeLanguage };
};
