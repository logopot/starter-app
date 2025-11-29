import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useLocation } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Maintenance from "../components/Maintenance/Maintenance";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();
  // const theme = useTheme();

  // Sync language with URL parameter
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // Handle section scrolling based on route
  useEffect(() => {
    // Get the section from the URL path (e.g., /sr/maintenance -> 'maintenance')
    const section = location.pathname.split("/").pop();

    // If we're on a section route and not the home page, scroll to that section
    if (section && section !== lang) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.pathname, lang]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Hero onCTAClick={scrollToSection} />

      {/* Maintenance Section */}
      <Maintenance />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <Contact t={t} />
    </>
  );
};

export default HomePage;
