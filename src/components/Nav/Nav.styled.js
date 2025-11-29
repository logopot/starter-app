import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  transition: all 0.3s ease;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0.5rem 0;
  }
`;

export const Logo = styled(Link)`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.light} !important;
  text-decoration: none;
  transition: transform 0.3s ease;
  padding: 0.5rem 0;

  &:hover {
    transform: scale(1.05);
    color: #f8f9fa !important;
    cursor: pointer;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.1rem;
    margin-right: 0;
  }
`;

// Regular NavLink for section scrolling
export const NavLink = styled.a`
  font-weight: 500;
  margin: 0 0.5rem;
  color: rgba(255, 255, 255, 0.9) !important;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.text.light} !important;
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 50%;
    background: ${(props) => props.theme.colors.text.light};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;

// Special styling for Router Link components
export const RouterNavLink = styled(Link)`
  font-weight: 500;
  margin: 0 0.5rem;
  color: rgba(255, 255, 255, 0.9) !important;
  transition: all 0.3s ease;
  position: relative;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.text.light} !important;
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 50%;
    background: ${(props) => props.theme.colors.text.light};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;

export const LanguageButton = styled.button`
  border: 2px solid ${(props) => props.theme.colors.text.light} !important;
  color: ${(props) => props.theme.colors.text.light} !important;
  font-weight: bold;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem !important;

  &:hover {
    background: ${(props) => props.theme.colors.text.light} !important;
    color: ${(props) => props.theme.colors.primary} !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;
