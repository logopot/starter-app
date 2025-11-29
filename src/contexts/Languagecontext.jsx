import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState("sr");

  // Get language from URL path
  useEffect(() => {
    const pathLang = location.pathname.split("/")[1];
    if (pathLang === "en" || pathLang === "sr") {
      setCurrentLang(pathLang);
      if (i18n.language !== pathLang) {
        i18n.changeLanguage(pathLang);
      }
    } else {
      // Redirect to Serbian if no valid language in URL
      navigate("/sr", { replace: true });
    }
  }, [location.pathname, i18n, navigate]);

  const changeLanguage = (newLang) => {
    const currentPath = location.pathname.replace(/^\/(en|sr)/, "") || "/";
    navigate(`/${newLang}${currentPath}`);
  };

  const value = {
    currentLang,
    changeLanguage,
    getPath: (path = "") => `/${currentLang}${path}`,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
