import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";

const CollectedWorksPage = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  // Sync language with URL parameter
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const projects = [
    {
      id: 1,
      title: t("collectedWorks.projects.project1.title"),
      description: t("collectedWorks.projects.project1.description"),
      year: "2023",
    },
    {
      id: 2,
      title: t("collectedWorks.projects.project2.title"),
      description: t("collectedWorks.projects.project2.description"),
      year: "2022",
    },
    {
      id: 3,
      title: t("collectedWorks.projects.project3.title"),
      description: t("collectedWorks.projects.project3.description"),
      year: "2021",
    },
    {
      id: 4,
      title: t(
        "collectedWorks.projects.project4.title",
        "Piano Maintenance Program",
      ),
      description: t(
        "collectedWorks.projects.project4.description",
        "Regular maintenance program for schools and music institutions.",
      ),
      year: "2020",
    },
    {
      id: 5,
      title: t("collectedWorks.projects.project5.title", "Sound Optimization"),
      description: t(
        "collectedWorks.projects.project5.description",
        "Advanced sound optimization techniques for professional studios.",
      ),
      year: "2019",
    },
    {
      id: 6,
      title: t(
        "collectedWorks.projects.project6.title",
        "Historical Instrument Preservation",
      ),
      description: t(
        "collectedWorks.projects.project6.description",
        "Preservation of historical instruments for museums and collections.",
      ),
      year: "2018",
    },
  ];

  return (
    <div
      className="collected-works-page"
      style={{ paddingTop: "100px", minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={`/${lang}`}>
                    {t("collectedWorks.home", "Home")}
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {t("collectedWorks.title")}
                </li>
              </ol>
            </nav>

            <h1>{t("collectedWorks.title")}</h1>
            <p className="lead">{t("collectedWorks.description")}</p>

            {/* Statistics */}
            <div className="row mt-5 mb-5">
              <div className="col-md-3 col-6 text-center">
                <div className="border rounded p-3">
                  <h3 className="text-primary">15+</h3>
                  <p>
                    {t("collectedWorks.statistics.years", "Years Experience")}
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-6 text-center">
                <div className="border rounded p-3">
                  <h3 className="text-primary">500+</h3>
                  <p>
                    {t(
                      "collectedWorks.statistics.projects",
                      "Projects Completed",
                    )}
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-6 text-center">
                <div className="border rounded p-3">
                  <h3 className="text-primary">100+</h3>
                  <p>
                    {t(
                      "collectedWorks.statistics.clients",
                      "Satisfied Clients",
                    )}
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-6 text-center">
                <div className="border rounded p-3">
                  <h3 className="text-primary">50+</h3>
                  <p>
                    {t(
                      "collectedWorks.statistics.restorations",
                      "Pianos Restored",
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="row mt-5">
              {projects.map((project) => (
                <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title">{project.title}</h5>
                        <span className="badge bg-secondary">
                          {project.year}
                        </span>
                      </div>
                      <p className="card-text">{project.description}</p>
                    </div>
                    <div className="card-footer bg-transparent">
                      <small className="text-muted">
                        {t(
                          "collectedWorks.projectDuration",
                          "Project duration:",
                        )}{" "}
                        2-4 {t("collectedWorks.weeks", "weeks")}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="row mt-5">
              <div className="col-12 text-center">
                <div className="bg-light p-5 rounded">
                  <h3>
                    {t("collectedWorks.cta.title", "Start Your Project Today")}
                  </h3>
                  <p className="mb-4">
                    {t(
                      "collectedWorks.cta.description",
                      "Interested in professional piano services? Get in touch for a consultation.",
                    )}
                  </p>
                  <Link
                    to={`/${lang}/contact`} // Use current language from URL params
                    className="btn btn-primary btn-lg"
                  >
                    {t("collectedWorks.cta.button", "Contact Me")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectedWorksPage;
