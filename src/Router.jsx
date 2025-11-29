import { Navigate, Route, Routes } from "react-router-dom";
// import { LanguageProvider } from "./contexts/Languagecontext";
import ScrollToTop from "./ScrollToTop";
import HomePage from "./pages/HomePage";
import CollectedWorksPage from "./pages/CollectedWorksPage";

const AppRouter = () => {
  return (
    <ScrollToTop>
      {/* <LanguageProvider> */}
      <Routes>
        {/* Redirect root to Serbian by default */}
        <Route path="/" element={<Navigate to="/sr" replace />} />

        {/* Language-specific routes */}
        <Route path="/:lang" element={<HomePage />} />
        <Route path="/:lang/maintenance" element={<HomePage />} />
        <Route path="/:lang/gallery" element={<HomePage />} />
        <Route path="/:lang/contact" element={<HomePage />} />
        <Route path="/:lang/collected-works" element={<CollectedWorksPage />} />

        {/* Catch-all route - redirect to Serbian */}
        <Route path="*" element={<Navigate to="/sr" replace />} />
      </Routes>
      {/* </LanguageProvider> */}
    </ScrollToTop>
  );
};

export default AppRouter;
