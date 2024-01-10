import { FaPlus } from "react-icons/fa";

export const HomeScreen = () => {
  return (
    <div>
      <div className="w-full justify-center items-center h-screen flex flex-col ">
        <div className="w-[90%] h-[95%] grid grid-cols-4 gap-5 ">
          <div className="border rounded-md h-[300px] flex p-4 flex-col  ">
            <div className="w-full flex justify-between ">
              <div>Amount:</div>
              <div>Price:</div>
            </div>

            <div className="my-10">Product: </div>
          </div>
        </div>
        <button className=" rounded-full text-[24px] bg-black text-white p-4 absolute bottom-4 right-6">
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
