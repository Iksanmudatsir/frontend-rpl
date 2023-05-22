import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");

  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[155px] h-[26px]" style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))"}}>
          <div className="w-[155px] h-[26px] absolute left-[100px] top-[30px] rounded-[15px] bg-white" />
          <p className="w-[118px] h-3 absolute left-[140px] top-[38px] text-[8px] font-bold text-left text-black/20">
            Search
          </p>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 absolute left-[120px] top-7"
            preserveAspectRatio="none"
          >
            <g opacity="0.2">
              <path
                d="M11.025 11.8417L7.75833 8.575C7.46667 8.80833 7.13125 8.99306 6.75208 9.12917C6.37292 9.26528 5.96944 9.33333 5.54167 9.33333C4.48194 9.33333 3.58517 8.96642 2.85133 8.23258C2.11711 7.49836 1.75 6.60139 1.75 5.54167C1.75 4.48194 2.11711 3.58497 2.85133 2.85075C3.58517 2.11692 4.48194 1.75 5.54167 1.75C6.60139 1.75 7.49836 2.11692 8.23258 2.85075C8.96642 3.58497 9.33333 4.48194 9.33333 5.54167C9.33333 5.96944 9.26528 6.37292 9.12917 6.75208C8.99306 7.13125 8.80833 7.46667 8.575 7.75833L11.8563 11.0396C11.9632 11.1465 12.0167 11.2778 12.0167 11.4333C12.0167 11.5889 11.9583 11.725 11.8417 11.8417C11.7347 11.9486 11.5986 12.0021 11.4333 12.0021C11.2681 12.0021 11.1319 11.9486 11.025 11.8417ZM5.54167 8.16667C6.27083 8.16667 6.89072 7.91156 7.40133 7.40133C7.91156 6.89072 8.16667 6.27083 8.16667 5.54167C8.16667 4.8125 7.91156 4.19261 7.40133 3.682C6.89072 3.17178 6.27083 2.91667 5.54167 2.91667C4.8125 2.91667 4.19261 3.17178 3.682 3.682C3.17178 4.19261 2.91667 4.8125 2.91667 5.54167C2.91667 6.27083 3.17178 6.89072 3.682 7.40133C4.19261 7.91156 4.8125 8.16667 5.54167 8.16667Z"
                fill="black"
              />
            </g>
          </svg>
        </div>

        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          All Menu
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.urlParamName
                      ? "bg-white"
                      : "bg-cartNumBg"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category == filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
