import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { ArticlePage } from "./pages/ArticlesPage/ArticlesPage";
import { ArticlesFormPage } from "./pages/ArticleFormPage/ArticleFormPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { HomePage } from "./pages/HomePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { ArticleProvider } from "./context/ArticleContext";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <main className="container mx-auto px-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
          <ArticleProvider>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/articles" element={<ArticlePage />} />
                <Route path="/add-article" element={<ArticlesFormPage />} />
                <Route path="/article/:id" element={<ArticlesFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </ArticleProvider>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
