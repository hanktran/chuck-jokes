import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import JokeDetailsPage from "./pages/JokeDetailsPage";
import LandingPage from "./pages/LandingPage";
import Banner from "./components/Banner";

export const PageRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Routes>
        <Route path="/jokes/:id" element={<JokeDetailsPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
