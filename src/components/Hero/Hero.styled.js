import styled from "styled-components";
import heroBackground from "../../Assets/images/slika01.jpg"; // Import the image

export const HeroSection = styled.section`
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: end;
  justify-content: center;
  overflow: hidden;
  background: url(${heroBackground});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  /* Fallback background if image doesn't load */
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: 36px;

  @media (max-width: 768px) {
    min-height: 500px;
    background-attachment: scroll;
  }

  @media (max-width: 576px) {
    min-height: 400px;
  }
`;

export const HeroContent = styled.div`
  padding: 200px 125px 100px;

  @media (max-width: 992px) {
    padding: 100px 0px 100px;
  }

  @media (max-width: 768px) {
    padding: 100px 40px 100px;
  }

  @media (max-width: 576px) {
    padding: 200px 15px 42px;
    text-align: center;
  }
`;

export const CTAButton = styled.button`
  background: ${(props) => props.theme.colors.secondary};
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.5);
  }

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;
