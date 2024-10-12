import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import AboutusPage from "../pages/AboutusPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import QuestionPage from "../pages/QuestionPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductSimilarPage from "../pages/ProductSimilarPage";
import ContactusPage from "../pages/ContactusPage";
import ProductSimilarGidaPage from "../pages/ProductSimilarGidaPage";
import SidebarPage from "../pages/SidebarPage";

const CustomRoutes = () => {
  return (
    <Routes>
      
      <Route exact path="/Sidebar" element={<SidebarPage />} />
      
      <Route path="/Contactus" element={<ContactusPage />} />

      <Route
        exact
        path="/ProductSimilarGida"
        element={<ProductSimilarGidaPage />}
      />
      <Route exact path="/ProductSimilar" element={<ProductSimilarPage />} />
      <Route exact path="/ProductDetails" element={<ProductDetailsPage />} />
      <Route exact path="/Question" element={<QuestionPage />} />
      {/* <Route exact path="/TopBar" element={<TopBarPage />} /> */}
      <Route exact path="/Product" element={<ProductPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/Aboutus" element={<AboutusPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;
