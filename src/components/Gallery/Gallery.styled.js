import styled from "styled-components";

export const GallerySection = styled.section`
  padding: 100px 0;
  min-height: 50vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.background || "#f8f9fa"};

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const GalleryItem = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  background: ${(props) => props.background || "#6c757d"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: "👁️ Click to view";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.5rem;
    text-align: center;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateY(0);
  }
`;

export const ImageCaption = styled.div`
  padding: 1rem;
  background: white;
  text-align: center;
  font-weight: 500;
  color: ${(props) => props.theme.colors.secondary};
`;

// Lightbox/Modal Styles
export const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
`;

export const LightboxContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LightboxImage = styled.div`
  background: ${(props) => props.background || "#6c757d"};
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

export const LightboxCaption = styled.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const LightboxNav = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const NavButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.accent};
    transform: translateY(-2px);
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

export const ImageCounter = styled.div`
  color: white;
  font-size: 1rem;
  margin: 0 1rem;
`;
