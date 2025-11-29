import { createGlobalStyle, css } from "styled-components";
import { breakpoints } from "./themes/commonTheme";

export default createGlobalStyle`${css`
  /* Smooth scrolling for anchor links */
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px; /* Account for fixed navbar */
  }

  /* Ensure sections have proper offset */
  section {
    scroll-margin-top: 80px;
  }
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.primary};
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .navbar-nav--border-bottom {
    ${breakpoints.down("lg")} {
      border-bottom: 1px solid ${(props) => props.theme.primary};
    }
  }

  .navbar-toggler__custom {
    border: 0;

    &:focus {
      box-shadow: none;
    }
  }

  .custom-close-icon {
    svg {
      width: 1.5em;
      height: 1.5em;
    }
  }

  .navbar-collapse {
    ${breakpoints.up("lg")} {
      max-height: none;
      opacity: 1;
      overflow: visible;
    }
    ${breakpoints.down("lg")} {
      overflow: hidden;
      transition:
        max-height 0.4s ease,
        opacity 0.4s ease;
    }
  }

  .slide-down {
    ${breakpoints.down("lg")} {
      max-height: 500px;
      opacity: 1;
    }
  }

  .slide-up {
    ${breakpoints.down("lg")} {
      max-height: 0;
      opacity: 0;
    }
  }

  a:hover {
    color: unset;
  }

  .active {
    color: ${(props) => props.theme.accent} !important;
    font-weight: bold;
  }

  .backgroundHero {
    background:
      radial-gradient(
          circle,
          transparent 20%,
          ${(props) => props.theme.background} 20%,
          ${(props) => props.theme.background} 80%,
          transparent 80%,
          transparent
        )
        0% 0% / 24px 24px,
      radial-gradient(
          circle,
          transparent 20%,
          ${(props) => props.theme.background} 20%,
          ${(props) => props.theme.background} 80%,
          transparent 80%,
          transparent
        )
        12px 12px / 24px 24px,
      linear-gradient(${(props) => props.theme.neutral} 1px, transparent 1px)
        0px -0.5px / 12px 12px,
      linear-gradient(
          90deg,
          ${(props) => props.theme.neutral} 1px,
          ${(props) => props.theme.background} 1px
        ) -0.5px
        0px / 12px 12px ${(props) => props.theme.background};
    background-size:
      24px 24px,
      24px 24px,
      12px 12px,
      12px 12px;
    background-color: ${(props) => props.theme.background};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    line-height: 1.2;

    ${breakpoints.down("lg")} {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2.1rem;
    font-weight: bold;
    line-height: 1.3;
    margin-bottom: 2rem;

    ${breakpoints.down("md")} {
      font-size: 1.8rem;
    }
  }

  h3 {
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1.4;

    ${breakpoints.down("md")} {
      font-size: 1.2rem;
    }
  }

  h4 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.6;
  }

  h6 {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.7;
  }

  p {
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 0;
  }

  /* Breadcrumb styling */
  .breadcrumb {
    background-color: transparent;
    padding: 0.75rem 0;
  }

  .breadcrumb-item a {
    text-decoration: none;
    color: #6c757d;
  }

  .breadcrumb-item a:hover {
    color: #495057;
  }

  /* Card hover effects */
  .card {
    transition:
      transform 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
  }

  /* Placeholder images */
  .placeholder-image {
    border-radius: 0.375rem;
  }

  /* Statistics counters */
  .border.rounded {
    transition: all 0.3s ease;
  }

  .border.rounded:hover {
    background-color: #f8f9fa;
    border-color: #3498db !important;
  }

  /* Contact form enhancements */
  .contact-info {
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 0.375rem;
    height: 100%;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .collected-works-page {
      padding-top: 80px !important;
    }

    .hero h1 {
      font-size: 2.5rem;
    }

    .statistics .col-6 {
      margin-bottom: 1rem;
    }
  }
`}`;
