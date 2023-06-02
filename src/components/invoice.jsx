import React from "react";
import EmptyCart from "../img/emptyCart.svg";

const currentDate = new Date().toLocaleDateString('en-GB').split('/').join(' / ');

// const currentDate = new Date().toISOString().slice(0, 10);

const Invoice = ({ cartItems, total, orderId, tableId }) => {
  return (
    <>
    <div className="absolute inset-0 h-full w-full object-cover bg-black/50"></div>
    <div 
      className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4 bg-[#D9D9D9]/80 py-10 object-cover bg-no-repeat rounded-lg "
      style={{ backgroundImage: `url(${EmptyCart})`, backgroundPosition: 'bottom'}}>
    <div className="px-3">
    <span><strong>Terima Kasih, Pesanan Kamu Sedang Diproses</strong></span>
    </div>
    <div className="px-5">
      <div className="bg-[#D9D9D9] mt-5 pt-3 rounded-sm mb-5">
        <div className="px-2 flex justify-between items-center ">
          <p className="w-11 h-4 text-[13px] font-bold text-left text-[#A64B2A]">KopiRiolo</p>
          <p className="h-4 font-bold text-left text-black">Order Id: {orderId}</p>
        </div>
        <div className="w-full h-0.5 rounded-[5px] bg-[#8e3200] mt-2" />
        <div className="px-2 flex justify-between items-center">
          <p className="font-medium text-[13px] text-left mt-1 text-black">Table No: {tableId}</p>
          <p className="font-medium text-[13px] text-left mt-1 text-black">Date : {currentDate}</p>
        </div>
        <table className="w-full mt-2">
          <thead>
            <tr className="bg-[#D9D9D9]">
              <th className="px-4 pt-3 text-[8px] font-bold text-left text-black">SL.</th>
              <th className="pt-3 text-[8px] font-bold text-left text-black">Item Description</th>
              <th className="px-4 pt-3 text-[8px] font-bold text-left text-black">Price</th>
              <th className="px-4 pt-3 text-[8px] font-bold text-left text-black">Qty.</th>
              <th className="px-4 pt-3 text-[8px] font-bold text-left text-black">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, i) => (
              <tr key={item.id}>
                <td className="px-4 py-2 text-[8px] text-left">{i + 1}</td>
                <td className="py-2 text-[8px] text-left">{item.title}</td>
                <td className="px-4 py-2 text-[8px] text-left">{item.price}</td>
                <td className="px-4 py-2 text-[8px] text-left">{item.qty}</td>
                <td className="px-4 py-2 text-[8px] text-left">Rp.{item.price * item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full h-0.5 rounded-[5px] bg-[#8e3200] mt-2" />
        <div className="px-2 flex justify-between items-center">
          <p className="text-[6px] font-medium text-left text-black py-3">Terima Kasih</p>
          <p className="text-[8px] px-2 font-semibold text-left text-[#8e3200]">Total : Rp.{total}</p>
        </div>
      </div>
    </div>
    <div className="px-3">
        <span className="text-[#8e3200] text-[10px] font-semibold">Silahkan melakukan pembayaran secara langsung di kasir!!</span>
      </div>
    </div>
    </>
  );
};


export default Invoice;
