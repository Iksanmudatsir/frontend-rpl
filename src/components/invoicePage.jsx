import React from "react";
import Invoice from "./invoice";

const InvoicePage = ({ cartItems, total }) => {
  return (
    <div>
      <h1>Invoice</h1>
      <Invoice cartItems={cartItems} total={total} />
    </div>
  );
};

export default InvoicePage;
