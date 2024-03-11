import { Route, Routes } from "react-router-dom";
import { ArticleProvider } from "../context/ArticleContext";
import { HomePage } from "../views/HomePage";
import { LoginPage } from "../views/LoginPage/LoginPage";
import { RegisterPage } from "../views/RegisterPage/RegisterPage";
import { CommentProvider } from "../context/CommentContext";
import { ArticlesPage } from "../views/ArticlesPage/ArticlesPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { ArticlePage } from "../views/ArticlePage/ArticlePage";
import { MyArticles } from "../views/MyArticles/MyArticles";
import { ArticlesFormPage } from "../views/ArticleFormPage/ArticleFormPage";
import { ProfilePage } from "../views/ProfilePage/ProfilePage";
import { AboutPage } from "../views/AboutPage/AboutPage";
import { ResetPassword } from "../views/ResetPassword/ResetPassword";
import { ConfirmAccount } from "../views/ConfirmAccount/ConfirmAccount";
import { NewPassword } from "../views/NewPassword/NewPassword";
import { ChangePasswordPage } from "../views/ChangePasswordPage/ChangePasswordPage";
import { ContactPage } from "../views/ContactPage/ContactPage";
import { NotFoundPage } from "../views/404/NotFoundPage";

export const AppRouter = () => {
  return (
    <ArticleProvider>
      <CommentProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
          <Route
            path="/confirm-account/:token"
            element={<ConfirmAccount />}
          ></Route>
          <Route path="/new-password/:token" element={<NewPassword />}></Route>
          <Route
            path="change-password"
            element={<ChangePasswordPage />}
          ></Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/my-articles" element={<MyArticles />}></Route>
            <Route path="/add-article" element={<ArticlesFormPage />} />
            <Route path="/edit-article/:id" element={<ArticlesFormPage />} />
            <Route path="/my-profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </CommentProvider>
    </ArticleProvider>
  );
};
