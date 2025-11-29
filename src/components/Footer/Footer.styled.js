import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 40px 0 20px;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const LogoSection = styled.div`
  flex: 1;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Logo = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #3498db;
  font-family: "Arial", sans-serif;
`;

export const Tagline = styled.p`
  font-size: 1rem;
  color: #bdc3c7;
  margin: 0;
`;

export const NavSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const NavLink = styled.a`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #3498db;
  }
`;

export const Copyright = styled.div`
  border-top: 1px solid #34495e;
  padding-top: 20px;
  width: 100%;
  text-align: center;
  color: #bdc3c7;
  font-size: 0.9rem;
`;
