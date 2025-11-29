import React from "react";
import { useTranslation } from "react-i18next";
import {
  MaintenanceSection,
  SectionTitle,
  SectionDescription,
  ServicesGrid,
  ServiceCard,
  ServiceTitle,
  ServiceDescription,
  IconWrapper,
} from "./Maintenance.styled";

const Maintenance = ({ background, id = "maintenance" }) => {
  const { t } = useTranslation();

  // Service data with icons and translation keys
  const services = [
    {
      key: "tuning",
      icon: "🎵",
      title: t("maintenance.services.tuning", "Tuning Services"),
      description: t(
        "maintenance.services.tuningDesc",
        "Professional piano tuning to ensure perfect pitch and harmony.",
      ),
    },
    {
      key: "repair",
      icon: "🔧",
      title: t("maintenance.services.repair", "Repair Services"),
      description: t(
        "maintenance.services.repairDesc",
        "Comprehensive repair services for all types of pianos.",
      ),
    },
    {
      key: "regulation",
      icon: "⚙️",
      title: t("maintenance.services.regulation", "Regulation"),
      description: t(
        "maintenance.services.regulationDesc",
        "Precise adjustment of piano action for optimal performance.",
      ),
    },
    {
      key: "restoration",
      icon: "✨",
      title: t("maintenance.services.restoration", "Restoration"),
      description: t(
        "maintenance.services.restorationDesc",
        "Complete restoration of antique and vintage pianos.",
      ),
    },
  ];

  return (
    <MaintenanceSection id={id} background={background}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle>{t("maintenance.title")}</SectionTitle>
            <SectionDescription>
              {t("maintenance.description")}
            </SectionDescription>

            <ServicesGrid>
              {services.map((service) => (
                <ServiceCard key={service.key}>
                  <IconWrapper>{service.icon}</IconWrapper>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </div>
        </div>
      </div>
    </MaintenanceSection>
  );
};

export default Maintenance;
