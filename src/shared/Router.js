import React from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DetailPage from "../pages/DetailPage";
import ListCharity from "../pages/ListCharity";
import MyCharity from "../pages/MyCharity";
import Donation from "../pages/Donation";
import NotFound from "../components/notfound/NotFound";

const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/charity" element={<ListCharity />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/detail" element={<DetailPage />} />
        <Route exact path="/donation/:slug" element={<Donation />} />
        <Route exact path='*' element={<NotFound />} />
        <Route exact path="/mycharity" element={<MyCharity />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
