import { FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { PopUp } from "./PopUp";
import { useEffect, useState } from "react";
import { viewproducts } from "../api/api";

export const HomeScreen = () => {
  const [state, setState] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    viewproducts().then((res: any) => {
      setData(res);
      console.log("res", res);
    });
  }, [data]);

  return (
    <div>
      <div className="w-full justify-center items-center h-screen flex flex-col ">
        <div className="w-[90%] h-[95%] grid grid-cols-4 gap-5 ">
          {data &&
            data?.map((el: any) => (
              <div className="border rounded-md h-[300px] flex p-4 flex-col  ">
                <div className="w-full flex justify-between ">
                  <div>Amount: {el.price}</div>
                  <div>Quantity:</div>
                </div>

                <div className="my-10">Product: {el.product}</div>
              </div>
            ))}
        </div>
        <button
          onClick={() => {
            setState(true);
          }}
          className=" rounded-full text-[24px] bg-black text-white p-4 absolute bottom-4 right-6"
        >
          <FaPlus />
        </button>

        {state ? (
          <div className="w-full h-screen backdrop-blur-lg bg-white absolute flex justify-center items-center ">
            <FaX
              className="absolute top-4 right-6 "
              onClick={() => {
                setState(false);
              }}
            />
            <PopUp dark={false} />{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
