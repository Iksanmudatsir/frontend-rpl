import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer, MenuContainer, HomeContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import LoadingScreen from "./components/loadingscreen";
import AxiosInstance from "./utils/AxiosInstance";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import { BASE_SIGNIN_USER } from "./utils/constant";

const App = () => {

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      // check apakah sudah ada token
      // if (token) {
      //   navigate('/')
      // } else {
        //   window.close();
        // }
      navigate('/')
    }
  }, [location.pathname, navigate])

  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />

      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <Routes>
          {/* <Route path="/" element={isLoading ? <LoadingScreen /> : <MainContainer />} /> */}
          <Route path="/auth/:id" element={<LoadingScreen />} />
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </main>
    </div>
  </AnimatePresence>
);
};

export default App;
