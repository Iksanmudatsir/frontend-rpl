import React, { useState, useEffect, useContext, createContext } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { BASE_SIGNIN_USER } from "../utils/constant";
import axios from 'axios';
import { storeAuth, getToken } from "../utils/auth";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

function LoadingScreen() {
  const { id } = useParams(); // Mendapatkan nilai parameter dari URL

  const [{ tableId }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const loginUser = async () => {
    await axios.post(BASE_SIGNIN_USER, {
      table: id
    }).then((res) => {
      storeAuth(res.data);
      dispatch({
        type: actionType.SET_TABLEID,
        tableId: id,
      });
    });
    navigate('/');
  }

  useEffect(() => {
    loginUser();
  }, []);

  return (
    <div>
      <div className="relative">
        <img src='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/76b6f2ff-6e07-4082-9343-1eecd459ad04/0af37204-fe01-42d3-9a39-851e7cbd68e4?org_if_sml=1455757' alt='' className="w-full h-full object-cover" />
        <div className='absolute inset-0 flex items-center justify-center'>
          <p className="text-white font-bold text-center text-2xl">Selamat Datang</p>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;