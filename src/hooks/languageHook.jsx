import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang) => {
    console.log("Language changed to:", lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setLanguage(lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
  }, []);

  return { language, changeLanguage };
};
