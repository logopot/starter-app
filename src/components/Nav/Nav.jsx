import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavContainer, Logo, NavLink, LanguageButton } from "./Nav.styled";

const Nav = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const navbarCollapseRef = useRef(null);

  // Always extract language from URL pathname
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

  // Navigation links configuration WITH translations
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

  const closeMobileMenu = () => {
    const navbarCollapse = navbarCollapseRef.current;
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse =
        window.bootstrap.Collapse.getInstance(navbarCollapse) ||
        new window.bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  };

  const changeLanguage = (newLang) => {
    // Get current path without language prefix
    const pathWithoutLang = location.pathname.replace(/^\/(en|sr)/, "") || "/";

    // Navigate to the same page in new language
    navigate(`/${newLang}${pathWithoutLang}`);

    // Also update i18n to ensure translations update immediately
    i18n.changeLanguage(newLang);
    closeMobileMenu();
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate(`/${currentLang}`);
    closeMobileMenu();
  };

  // Helper function to create paths with current language
  const getPath = (path = "") => `/${currentLang}${path}`;

  // Check if current route matches a navigation item for active styling
  const isActiveLink = (path) => {
    return location.pathname === getPath(path);
  };

  return (
    <NavContainer className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        {/* Logo */}
        <Logo
          as={Link}
          to={getPath()}
          className="navbar-brand"
          onClick={handleLogoClick}
        >
          Клавир Штимер Ђорђе Ћурчић
        </Logo>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links - Mapped from array */}
        <div
          ref={navbarCollapseRef}
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => (
              <li key={link.key} className="nav-item">
                <NavLink
                  as={Link}
                  to={getPath(link.path)}
                  className="nav-link"
                  onClick={closeMobileMenu}
                  style={{
                    fontWeight: isActiveLink(link.path) ? "bold" : "normal",
                  }}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* Language Switcher - Separate from mapped links */}
            <li className="nav-item ms-2 d-flex align-items-center">
              <LanguageButton
                className="btn btn-outline-light"
                onClick={() =>
                  changeLanguage(currentLang === "sr" ? "en" : "sr")
                }
              >
                {currentLang === "sr" ? "EN" : "SR"}
              </LanguageButton>
            </li>
          </ul>
        </div>
      </div>
    </NavContainer>
  );
};

export default Nav;
