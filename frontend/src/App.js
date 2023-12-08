import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";
import AllArricals from "./pages/home/AllArricals";
import Pricing from "./pages/home/Pricing";
import Faqs from "./pages/home/Faqs";
import AboutUs from "./pages/home/AboutUs";
import ContactUs from "./pages/home/ContactUS";



function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
        </Route>
        <Route path="/articles" element={<AllArricals />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faqs />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<ContactUs />} /> 
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
