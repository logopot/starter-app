import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  GallerySection,
  SectionTitle,
  SectionDescription,
  GalleryGrid,
  GalleryItem,
  ImageContainer,
  ImageCaption,
  LightboxOverlay,
  LightboxContent,
  LightboxImage,
  LightboxCaption,
  LightboxNav,
  NavButton,
  CloseButton,
  ImageCounter,
} from "./Gallery.styled";

// Real image imports (add your actual images to src/assets/images/)
import Image1 from "../../Assets/images/gallery1.jpg";
import Image2 from "../../Assets/images/gallery2.jpg";
import Image3 from "../../Assets/images/gallery3.jpg";
import Image4 from "../../Assets/images/gallery4.jpg";
import Image5 from "../../Assets/images/gallery5.jpg";
import Image6 from "../../Assets/images/gallery6.jpg";

const Gallery = ({
  id = "gallery",
  background,
  title,
  description,
  images,
}) => {
  const { t } = useTranslation();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Real images data
  const realImages = [
    {
      id: 1,
      src: Image1,
      title: t("gallery.images.image1", "Grand Piano Restoration"),
      description: t(
        "gallery.images.image1Desc",
        "Before and after restoration of a classic grand piano",
      ),
    },
    {
      id: 2,
      src: Image2,
      title: t("gallery.images.image2", "Concert Hall Tuning"),
      description: t(
        "gallery.images.image2Desc",
        "Precision tuning for professional concert performances",
      ),
    },
    {
      id: 3,
      src: Image3,
      title: t("gallery.images.image3", "Antique Piano Repair"),
      description: t(
        "gallery.images.image3Desc",
        "Restoration of historical antique instruments",
      ),
    },
    {
      id: 4,
      src: Image4,
      title: t("gallery.images.image4", "Modern Studio Setup"),
      description: t(
        "gallery.images.image4Desc",
        "Sound optimization for recording studios",
      ),
    },
    {
      id: 5,
      src: Image5,
      title: t("gallery.images.image5", "Maintenance Service"),
      description: t(
        "gallery.images.image5Desc",
        "Regular maintenance and care services",
      ),
    },
    {
      id: 6,
      src: Image6,
      title: t("gallery.images.image6", "Custom Piano Work"),
      description: t(
        "gallery.images.image6Desc",
        "Custom modifications and special projects",
      ),
    },
  ];

  const imagesToUse = images || realImages;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesToUse.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagesToUse.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const goToPrevious = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? imagesToUse.length - 1 : prevIndex - 1,
      );
    };

    const goToNext = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imagesToUse.length - 1 ? 0 : prevIndex + 1,
      );
    };

    const handleKeyDown = (event) => {
      if (!isLightboxOpen) return;

      switch (event.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, imagesToUse.length]); // Add imagesToUse.length dependency

  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const currentImage = imagesToUse[currentImageIndex];

  return (
    <>
      <GallerySection id={id} background={background}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionTitle>{title || t("gallery.title")}</SectionTitle>
              <SectionDescription>
                {description || t("gallery.description")}
              </SectionDescription>

              <GalleryGrid>
                {imagesToUse.map((image, index) => (
                  <GalleryItem
                    key={image.id}
                    onClick={() => openLightbox(index)}
                  >
                    <ImageContainer
                      style={{
                        backgroundImage: `url(${image.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Hover overlay text */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "rgba(0,0,0,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "1.2rem",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                        }}
                        className="hover-overlay"
                      >
                        👁️ Click to view
                      </div>
                    </ImageContainer>
                    <ImageCaption>{image.title}</ImageCaption>
                  </GalleryItem>
                ))}
              </GalleryGrid>
            </div>
          </div>
        </div>
      </GallerySection>

      {/* Lightbox/Modal */}
      <LightboxOverlay isOpen={isLightboxOpen} onClick={closeLightbox}>
        <LightboxContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeLightbox}>×</CloseButton>

          <LightboxImage
            style={{
              backgroundImage: `url(${currentImage?.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <LightboxCaption>{currentImage?.description}</LightboxCaption>

          <LightboxNav>
            <NavButton onClick={goToPrevious}>← Previous</NavButton>

            <ImageCounter>
              {currentImageIndex + 1} / {imagesToUse.length}
            </ImageCounter>

            <NavButton onClick={goToNext}>Next →</NavButton>
          </LightboxNav>
        </LightboxContent>
      </LightboxOverlay>
    </>
  );
};

export default Gallery;
