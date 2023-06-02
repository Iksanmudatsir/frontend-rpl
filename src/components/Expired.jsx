import React from 'react';
import EmptyCart from "../img/emptyCart.svg";

function Expired() {
  return (
    <>
    <div className="absolute inset-0 h-full w-full object-cover bg-black/50"></div>
      <div 
        className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4 bg-[#D9D9D9]/80 py-10 object-cover bg-no-repeat rounded-lg"
        style={{ backgroundImage: `url(${EmptyCart})`, backgroundPosition: 'bottom'}}>
      <div className="px-3 mx-auto mx-16">
      <span><strong>Silahkan scan Barcode lagi</strong></span>
      </div>
     </div>
     </>
  );
}

export default Expired;