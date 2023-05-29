import React, { useEffect } from "react";
import Invoice from "./invoice";
import { useStateValue } from "../context/StateProvider";

const InvoicePage = () => {
  const [{ cartItems, orderId }, dispatch] = useStateValue();

  const totalPrice = cartItems.reduce(function (accumulator, item) {
    return accumulator + item.qty * item.price;
  }, 0);

  useEffect(() => {
    console.log('dofoerodoeredrode', orderId);
  })

  return (
    <div>
      <h1 className="h-4 font-bold text-left text-black mb-2">Invoice</h1>
      <Invoice cartItems={cartItems} total={totalPrice} orderId={orderId} />
    </div>
  );
};

export default InvoicePage;
