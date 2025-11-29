import React from "react";
import { useTranslation } from "react-i18next";
import { HeroSection, HeroContent, CTAButton } from "./Hero.styled";
import { Container } from "react-bootstrap";

const Hero = ({ onCTAClick }) => {
  const { t } = useTranslation();

  const handleCTAClick = () => {
    if (onCTAClick) {
      onCTAClick("contact");
    }
  };

  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <CTAButton onClick={handleCTAClick}>{t("hero.cta")}</CTAButton>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

// Default props
Hero.defaultProps = {
  onCTAClick: () => {},
};

export default Hero;
