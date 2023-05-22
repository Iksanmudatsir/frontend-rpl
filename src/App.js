import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import LoadingScreen from "./components/loadingscreen";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const delay = 1000;

  //   const timeout = setTimeout(() => {
  //     navigate("/*");
  //   }, delay);

  //   return () => clearTimeout(timeout);
  // }, [navigate]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<LoadingScreen />} />
            {/* <Route path="/*" element={<MainContainer />} /> */}
            
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
