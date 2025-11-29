import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useLocation } from "react-router-dom";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();

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

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center text-white">
              <h1>{t("hero.title")}</h1>
              <p className="lead">{t("hero.subtitle")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="section py-5" id="maintenance">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>{t("maintenance.title")}</h2>
              <p>{t("maintenance.description")}</p>
              <div className="row mt-4">
                <div className="col-md-6">
                  <h5>{t("maintenance.services.tuning", "Tuning Services")}</h5>
                  <p>
                    {t(
                      "maintenance.services.tuningDesc",
                      "Professional piano tuning to ensure perfect pitch and harmony.",
                    )}
                  </p>
                </div>
                <div className="col-md-6">
                  <h5>{t("maintenance.services.repair", "Repair Services")}</h5>
                  <p>
                    {t(
                      "maintenance.services.repairDesc",
                      "Comprehensive repair services for all types of pianos.",
                    )}
                  </p>
                </div>
                <div className="col-md-6">
                  <h5>{t("maintenance.services.regulation", "Regulation")}</h5>
                  <p>
                    {t(
                      "maintenance.services.regulationDesc",
                      "Precise adjustment of piano action for optimal performance.",
                    )}
                  </p>
                </div>
                <div className="col-md-6">
                  <h5>
                    {t("maintenance.services.restoration", "Restoration")}
                  </h5>
                  <p>
                    {t(
                      "maintenance.services.restorationDesc",
                      "Complete restoration of antique and vintage pianos.",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section py-5 bg-light" id="gallery">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>{t("gallery.title")}</h2>
              <p>{t("gallery.description")}</p>
              <div className="row mt-4">
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-body text-center">
                      <div
                        className="placeholder-image bg-secondary text-white d-flex align-items-center justify-content-center"
                        style={{ height: "200px" }}
                      >
                        <span>{t("gallery.images.image1", "Image 1")}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-body text-center">
                      <div
                        className="placeholder-image bg-secondary text-white d-flex align-items-center justify-content-center"
                        style={{ height: "200px" }}
                      >
                        <span>{t("gallery.images.image2", "Image 2")}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-body text-center">
                      <div
                        className="placeholder-image bg-secondary text-white d-flex align-items-center justify-content-center"
                        style={{ height: "200px" }}
                      >
                        <span>{t("gallery.images.image3", "Image 3")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section py-5" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>{t("contact.title")}</h2>
              <p>{t("contact.description")}</p>
              <div className="row">
                <div className="col-md-6">
                  <form className="contact-form">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        {t("contact.name")}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder={t("contact.name")}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        {t("contact.email")}
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder={t("contact.email")}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        {t("contact.message")}
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder={t("contact.message")}
                        rows="5"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      {t("contact.send")}
                    </button>
                  </form>
                </div>
                <div className="col-md-6">
                  <div className="contact-info">
                    <h5>{t("contact.contactInfo", "Contact Information")}</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <strong>{t("contact.phone", "Phone")}:</strong> +381 64
                        123 4567
                      </li>
                      <li className="mb-2">
                        <strong>{t("contact.email", "Email")}:</strong>{" "}
                        djordje.curcic@example.com
                      </li>
                      <li className="mb-2">
                        <strong>{t("contact.address", "Address")}:</strong>{" "}
                        Beograd, Srbija
                      </li>
                      <li className="mb-2">
                        <strong>{t("contact.hours", "Working Hours")}:</strong>{" "}
                        {t("contact.hoursValue", "Mon-Fri: 9AM-6PM")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
