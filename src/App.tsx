import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./layout/Footer";
import { AppRouter } from "./routes/Router";

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <Navbar />

            {/* <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
              <Route path="/reset-password" element={<ResetPassword />}></Route>
              <Route
                path="/confirm-account/:token"
                element={<ConfirmAccount />}
              ></Route>
              <Route
                path="/new-password/:token"
                element={<NewPassword />}
              ></Route>
              <Route
                path="change-password"
                element={<ChangePasswordPage />}
              ></Route>
            </Routes> */}
            {/* <ArticleProvider>
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
            </ArticleProvider> */}
            <AppRouter />
            <Footer />
          </main>
        </BrowserRouter>
      </NotificationProvider>
    </AuthProvider>
  );
}
export default App;
