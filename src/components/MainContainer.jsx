import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import AxiosInstance from "../utils/AxiosInstance";
import { actionType } from "../context/reducer";
import { getToken, removeAuth } from "../utils/auth";
import { redirect, useNavigate } from "react-router-dom";

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const fetchData = async () => {
    await AxiosInstance.get('/item').then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data.data,
      });
    }).catch(() => {
      removeAuth();
    });
  };

  useEffect(() => {
    fetchData();
    const token = getToken();
    if (!token) {
      navigate('/expired');
    }
  }, []);

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => { }, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />

      <MenuContainer />

      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
