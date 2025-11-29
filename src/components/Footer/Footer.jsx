import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FooterContainer,
  FooterContent,
  FooterMain,
  LogoSection,
  Logo,
  Tagline,
  NavSection,
  NavLinks,
  NavLink,
  Copyright,
} from "./Footer.styled";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  // Always extract language from URL pathname (same as Nav component)
  const getCurrentLang = () => {
    const pathSegments = location.pathname
      .split("/")
      .filter((segment) => segment);

    // Check if first segment is a valid language code
    if (pathSegments.length > 0) {
      const possibleLang = pathSegments[0];
      if (possibleLang === "en" || possibleLang === "sr") {
        return possibleLang;
      }
    }

    // Default to Serbian if no valid language in URL
    return "sr";
  };

  const currentLang = getCurrentLang();

  // Navigation links configuration (same as Nav component)
  const getNavLinks = () => [
    {
      key: "collectedWorks",
      path: "/collected-works",
      type: "page",
      label: t("navigation.collectedWorks"),
    },
    {
      key: "maintenance",
      path: "/maintenance",
      type: "section",
      label: t("navigation.maintenance"),
    },
    {
      key: "gallery",
      path: "/gallery",
      type: "section",
      label: t("navigation.gallery"),
    },
    {
      key: "contact",
      path: "/contact",
      type: "section",
      label: t("navigation.contact"),
    },
    // Add more links here in the future...
  ];

  const navLinks = getNavLinks();

  // Helper function to create paths with current language (same as Nav component)
  const getPath = (path = "") => `/${currentLang}${path}`;

  const handleNavClick = (path) => {
    navigate(getPath(path));
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate(getPath());
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterMain>
          <LogoSection>
            <Logo onClick={handleLogoClick} style={{ cursor: "pointer" }}>
              Клавир Штимер
            </Logo>
            <Tagline>Ђорђе Ћурчић</Tagline>
          </LogoSection>

          <NavSection>
            <NavLinks>
              {navLinks.map((link) => (
                <NavLink
                  key={link.key}
                  onClick={() => handleNavClick(link.path)}
                >
                  {link.label}
                </NavLink>
              ))}
            </NavLinks>
          </NavSection>
        </FooterMain>

        <Copyright>
          © {currentYear} Клавир Штимер Ђорђе Ћурчић.{" "}
          {t("footer.allRights", "All rights reserved")}.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
