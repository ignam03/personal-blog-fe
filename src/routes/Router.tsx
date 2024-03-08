import { Route, Routes } from "react-router-dom";
import { ArticleProvider } from "../context/ArticleContext";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

export const AppRouter = () => {
  return (
    <ArticleProvider>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </ArticleProvider>
  );
};
