export const breakpoints = {
  xs: "0",
  tiny: "376px",
  sm: "576px",
  md: "767px",
  lg: "992px",
  xl: "1200px",
  xxl: "1440px",

  up: (size) => `@media only screen and (min-width: ${breakpoints[size]})`,
  down: (size) => `@media only screen and (max-width: ${breakpoints[size]})`,
  between: (down, up) =>
    `@media only screen and (max-width: ${breakpoints[down]}) and (min-width:${breakpoints[up]}) `,
};

const themes = {
  background: "#FDFDFF", // White background for cleanliness
  primary: "#032B43", // Prussian blue
  accent: "#3F88C5", // Steel blue
  neutral: "#C7DFC5", // tea grean
  highlight: "#D00000", // engaging orange
  lavanderPink: "#F5B0CB", // lavander pink
  uraniumBlue: "#B0D7FF", // uranium blue
  champagnePink: "#EED5C2",
  antiFlashWhite: "#f4f7fc",
  mapBackgroundColor: "#BBE6E4", // mint green
  mapBackgroundColorHighlight: "#3869c7",
  charcoal: "#b7babe",
};

export default themes;
