export const theme = {
   colors: {
      // Primary colors
      primary: "#ff6038", // Tomato
      secondary: "#333333", // Graphite
      background: "#F5F9E9", // Ivory

      // Text
      text: "#333333",
   },

   fonts: {
      primary: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
      mono: "'Courier New', monospace",
      musical: "'Arial', sans-serif",
   },

   borderRadius: {
      small: "4px",
      medium: "8px",
      large: "12px",
      xl: "20px",
   },

   // Breakpoint-ови за responsive дизајн
   breakpoints: {
      xs: "320px", // Мали мобилни
      sm: "576px", // Мобилни
      md: "768px", // Таблети
      lg: "992px", // Лаптопи
      xl: "1200px", // Десктоп
      xxl: "1400px", // Велики екрани
   },

   spacing: {
      xs: "0.25rem", // 4px
      sm: "0.5rem", // 8px
      md: "1rem", // 16px
      lg: "1.5rem", // 24px
      xl: "2rem", // 32px
      xxl: "3rem", // 48px
   },

   shadows: {
      small: "0 2px 4px rgba(0, 0, 0, 0.1)",
      medium: "0 4px 8px rgba(0, 0, 0, 0.12)",
      large: "0 8px 16px rgba(0, 0, 0, 0.15)",
      xl: "0 16px 32px rgba(0, 0, 0, 0.2)",
   },

   transitions: {
      fast: "0.15s ease",
      normal: "0.3s ease",
      slow: "0.5s ease",
   },
};
