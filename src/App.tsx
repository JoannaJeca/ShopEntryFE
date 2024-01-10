import { useState } from "react";
import pix from "./Assets/775118.jpg";

function App() {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="w-[600px] h-80 bg-white border-[5px] rounded-md flex">
          <img
            src={pix}
            className="w-[40%] h-[100%] object-cover rounded-1-md"
          />

          <div className=" flex-1 p-4">
            <div className="flex justify-between items-center mb-3">
              <h1 className="font-[700] text-[20px]">Classic Utility Jacket</h1>
              <strong className="font-bold text-gray-400">$115</strong>
            </div>
            <div className="text-[12px] mb-8">In Stock</div>
            <div>XS</div>
            <hr />
            <button></button>

            <div>Free shipping on all continential US orders</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
