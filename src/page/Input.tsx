import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const Input = ({
  icon,
  placeholder,
  drpDwn,
  className,
  dText,
  uText,
  error,
  disable,
  label,
  msg,
  ...props
}: any) => {
  const [state, setState] = useState(msg);

  return (
    <div>
      <div
        {...props}
        className={twMerge("w-[90%] flex gap-2 flex-col", className)}
      >
        {uText ? (
          <div className="flex items-center justify-between">
            <div className="dark:text-white text-black">{label}</div>
            <div className="text-violet-500">{uText}</div>
          </div>
        ) : label ? (
          <div className="dark:text-white text-black">{label}</div>
        ) : (
          ""
        )}

        <div
          className={`flex  items-center relative border  overflow-hidden rounded-md h-[40px] ${
            error ? "border-red-500" : ""
          }`}
        >
          <div className="absolute text-gray-500 ml-1 left-0 pointer-events-none">
            {icon}
          </div>

          <input
            placeholder={placeholder}
            type="text"
            contentEditable={disable ? false : true}
            value={disable ? "you@example.com" : state}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setState(e.target.value);
            }}
            className={`outline-none  bg-white focus:bg-gray-300 h-full w-full border-none  flex flex-1 ${
              icon ? "pl-6" : "pl-2"
            } ${disable ? "cursor-not-allowed" : ""}`}
          />

          {drpDwn ? (
            <div>
              <select className="w-[60px] focus:ring-4 ring-purple-500 mr-1 py-1  h-full outline-none">
                <option>NGN</option>
                <option>USD</option>
                <option>CD</option>
              </select>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`${dText ? "text-gray-600" : error ? "text-red-500" : ""}`}
        >
          {dText ? dText : error ? error : ""}
        </div>
      </div>
    </div>
  );
};
