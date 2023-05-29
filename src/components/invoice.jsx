import React from "react";

const currentDate = new Date().toLocaleDateString('en-GB').split('/').join(' / ');

// const currentDate = new Date().toISOString().slice(0, 10);

const tabelNumber = 'Table 1'

const Invoice = ({ cartItems, total, orderId }) => {
  return (
    <div>
      <span><strong>Terima Kasih, Pesanan Kamu Sedang Diproses</strong></span>
      <div className="bg-[#D9D9D9] mt-5 pt-3 rounded-sm mb-5">
        <div className="px-2 flex justify-between items-center ">
          <p className="w-11 h-4 text-[13px] font-bold text-left text-[#A64B2A]">KopiRiolo</p>
          <p className="h-4 font-bold text-left text-black">Costumer ID : {orderId}</p>
        </div>
        <div className="w-full h-0.5 rounded-[5px] bg-[#8e3200] mt-2" />
        <div className="px-2 flex justify-between items-center">
          <p className="font-medium text-[13px] text-left mt-1 text-black">Invoice to : {tabelNumber}</p>
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
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 text-[8px] text-left">1</td>
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
      <div className="mb-2">
        <span className="text-[#8e3200] text-[10px] font-semibold">Silahkan melakukan pembayaran secara langsung di kasir!!</span>
      </div>
    </div>
  );
};

export default Invoice;
