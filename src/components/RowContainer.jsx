import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { BASE_URL_MENU } from "../utils/constant";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart();
  }, [items]);

  const [modalOpen, setModalOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  
  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${flag
        ? "overflow-x-scroll scrollbar-none"
        : "overflow-x-hidden flex-wrap justify-center"
        }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-36 h-40 md:w-40 md:min-h-44 bg-cardOverlay rounded-lg py-2 px-4  my-8 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-20 h-20 -mt-3 md:-mt-4 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
                onClick={() => openModal(item)}
              >
                <img
                  src={`${BASE_URL_MENU}/${item.imageURL}`}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-3 md:-mt-4"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end -mt-3">
              <p className="text-textColor font-semibold text-xs md:text-sm">
                {item?.title}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-base text-headingColor font-semibold">
                  <span className="text-xs text-red-500">Rp</span> {item?.price}
                </p>
              </div>
            </div >
          </div >
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
       {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <div className="bg-[#d9d9d9] p-4 rounded-lg">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.348 5.364a1 1 0 1 0-1.414-1.414L10 8.586 6.066 4.65a1 1 0 1 0-1.414 1.414L8.586 10l-3.936 3.934a1 1 0 1 0 1.414 1.414L10 11.414l3.934 3.936a1 1 0 1 0 1.414-1.414L11.414 10l3.934-3.934z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            </div>
            <img
              src={`${BASE_URL_MENU}/${selectedItem?.imageURL}`}
              alt={selectedItem?.title}
              className="w-72 h-40 object-cover mb-5 rounded-xl"
              style={{ boxShadow: "0px 5px 5px 0 rgba(0,0,0,0.25)" }}
            />
            <div className="w-full h-16 rounded-md bg-white mx-auto shadow-md px-3 py-2 flex justify-between">
              <div className="flex flex-col">
                <h2 className="text-lg mb-1 font-bold text-left text-black">{selectedItem?.title}</h2>
                <p className="text-sm font-bold text-left text-[#c50d11]">Rp. {selectedItem?.price}</p>
              </div>
              <div className="flex mt-2">
                <button
                  className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-white hover:shadow-md"
                  onClick={() => setItems([...cartItems, selectedItem])}
                >
                  <MdShoppingBasket />
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-md bg-white mx-auto shadow-md px-3 py-2 flex flex-col mt-5 mb-10 overflow-hidden">
              <p className="w-12 h-3 text-[16px] font-semibold text-left text-black">Description</p>
              <p className="text-sm w-64 h-full text-[10px] mt-3 text-left text-black text-justify">{selectedItem?.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div >
  );
};

export default RowContainer;
