import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer, MenuContainer, HomeContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";
import LoadingScreen from "./components/loadingscreen";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import Expired from "./components/Expired";
import InvoicePage from "./components/invoicePage";

const App = () => {

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
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
            <Route path="/expired" element={<Expired />} />
            <Route path="/invoice" element={<InvoicePage />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
