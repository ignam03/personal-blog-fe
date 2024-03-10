import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { ArticlesPage } from "./pages/ArticlesPage/ArticlesPage";
import { ArticlesFormPage } from "./pages/ArticleFormPage/ArticleFormPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { HomePage } from "./pages/HomePage";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { ArticleProvider } from "./context/ArticleContext";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { NotificationProvider } from "./context/NotificationContext";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage";
import { CommentProvider } from "./context/CommentContext";
import { MyArticles } from "./pages/MyArticles/MyArticles";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./layout/Footer";
import { ChangePasswordPage } from "./pages/ChangePasswordPage/ChangePasswordPage";

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <Navbar />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
              <Route
                path="change-password"
                element={<ChangePasswordPage />}
              ></Route>
            </Routes>
            <ArticleProvider>
              <CommentProvider>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/articles" element={<ArticlesPage />} />
                  <Route path="/article/:id" element={<ArticlePage />}></Route>
                  <Route element={<ProtectedRoute />}>
                    <Route path="/my-articles" element={<MyArticles />}></Route>
                    <Route path="/add-article" element={<ArticlesFormPage />} />
                    <Route
                      path="/edit-article/:id"
                      element={<ArticlesFormPage />}
                    />
                    <Route path="/my-profile" element={<ProfilePage />} />
                  </Route>
                </Routes>
              </CommentProvider>
            </ArticleProvider>
            <Footer />
          </main>
        </BrowserRouter>
      </NotificationProvider>
    </AuthProvider>
  );
}
export default App;
