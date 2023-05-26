import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptyCart.svg";
import CartItem from "./CartItem";
import Invoice from "./invoice";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom/dist";
import { useHistory } from 'react-router-dom';

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);
  const [showInvoice, setShowInvoice] = useState(false);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
    console.log(tot);
  }, [tot, flag]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  const history = useNavigate;

  // useEffect(() => {
  //   if (showInvoice) {
  //     const timer = setTimeout(() => {
  //       setShowInvoice(false);
  //       Navigate.push('./MenuContainer.jsx');
  //     }, 7000);
  //     return () => clearTimeout(timer)
  //   }
  // }, [showInvoice, Navigate])

  const handleCheckout = () => {
    setShowInvoice(true);
  };

  // const navigate = useNavigate();

  // const handleCheckout = () => {
  //   navigate("./invoice.jsx");
  // };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
          onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}
      {cartItems && cartItems.length > 0 ? (
      <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
        {/* cart Items section */}
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
          {/* cart Item */}
          {cartItems &&
            cartItems.length > 0 &&
            cartItems.map((item) => {
              const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

              return (
                <CartItem
                  key={item.id}
                  item={item}
                  quantity={existingItem ? existingItem.quantity : 1}
                  setFlag={setFlag}
                  flag={flag}
                />
              );
            })}
        </div>

          {/* cart total section */}
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            {/* <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">Rp{tot}</p>
            </div> */}
            {/* <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Biaya Layanan</p>
              <p className="text-gray-400 text-lg">Rp</p>
            </div> */}

            <div className="w-full border-b border-gray-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold">Total</p>
              <p className="text-gray-200 text-xl font-semibold">
                Rp{tot}
              </p>
            </div>

            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-800 to-orange-900 text-gray-50 text-lg my-2 hover:shadow-lg"
                onClick={handleCheckout}
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-800 to-orange-900 text-gray-50 text-lg my-2 hover:shadow-lg"
                onClick={handleCheckout}
              >
                Check Out
              </motion.button>
            )}
           {showInvoice && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
                <div className="bg-white rounded-lg p-6 w-11/12 relative">
                  <Invoice cartItems={cartItems} total={tot} />
                  <div className=" flex justify-end">
                    <button
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                      onClick={() => {
                        setShowInvoice(false);
                        window.close();
                        alert("Jika website tidak menutup secara otomatis silakan tutup jendela secara manual karena pesanan anda telah direkam. Terima kasih");
                      }}
                    >
                      Done!!
                    </button>
                    </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Cart Kosong
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
