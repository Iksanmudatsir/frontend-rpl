import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer, MenuContainer, HomeContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import LoadingScreen from "./components/loadingscreen";
import AxiosInstance from "./utils/AxiosInstance";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    // await AxiosInstance.get('/item').then((data) => console.log(data));
    await AxiosInstance.get('/item').then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data.data,
      });
    });
  };

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setIsLoading(false);
      navigate("/home");
    }, 2000)
  }, [navigate]);

  useEffect(() => {
    if (location.pathname !== '/' && location.pathname !== '/home') {
      navigate('/loading');
    }
  }, [location.pathname, navigate])


  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />

      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <Routes>
          <Route path="/" element={isLoading ? <LoadingScreen /> : <MainContainer />} />
          <Route path="/home" element={<MainContainer />} />
          <Route path="/loading" element={<LoadingScreen />} />
        </Routes>
      </main>
    </div>
  </AnimatePresence>
);
};

export default App;
