import logo from "../Assets/775118.jpg";
import { GlobalButton } from "./GlobalButton";
import { Input } from "./Input";
import { BsGithub, BsTwitter } from "react-icons/bs";
import pc from "../Assets/775118.jpg";

export const PopUp = ({ dark, label, split, card }: any) => {
  return (
    <div>
      <div
        className={
          dark
            ? "  w-full flex justify-center items-center dark"
            : split
            ? "grid grid-cols-10 h-full"
            : " w-full flex justify-center items-center "
        }
      >
        <div
          className={` ${
            split
              ? "col-span-10 xl:col-span-5 items-center justify-center grid  "
              : "w-[400px]"
          } `}
        >
          <div className={`w-[400px] ${card ? "" : ""}`}>
            {split ? (
              <div>
                <img src={logo} className="h-[30px]" alt="" />
              </div>
            ) : (
              <center>
                <img src={logo} className="h-[30px]" alt="" />
              </center>
            )}

            {split ? (
              <div className="font-bold text-black dark:text-white text-[24px] my-10">
                Sign in to your account
              </div>
            ) : (
              <center className="font-bold text-black dark:text-white text-[24px] my-10">
                Sign in to your account
              </center>
            )}
            <div
              className={`${
                card ? "bg-white p-10 rounded-md border shadow-md" : ""
              }`}
            >
              <div className={`flex flex-col  ${label ? "gap-4" : ""}`}>
                <Input
                  label={label ? "Product" : ""}
                  placeholder={label ? "" : "Product"}
                  className="w-full"
                />
                <Input
                  label={label ? "Price" : ""}
                  className="w-full"
                  uText={label && !split && !card ? "Forgot password" : ""}
                  placeholder={label ? "" : "Price"}
                />
              </div>

              {label && !split && !card ? (
                ""
              ) : (
                <div className="flex items-center my-5 justify-between">
                  <div className="flex gap-4">
                    <input type="checkbox" />
                    <div>Remember me</div>
                  </div>
                  <div className="text-violet-500">
                    <strong>Forgot password?</strong>
                  </div>
                </div>
              )}

              <GlobalButton
                text="Sign in"
                size={"sm"}
                className="bg-violet-500 w-full py-2 justify-center text-[16px] my-5"
              />

              {split || card ? (
                ""
              ) : (
                <center className="text-sm text-black dark:text-white">
                  Not a member?{" "}
                  <span className="text-violet-500 ">
                    {" "}
                    Start a 14 day free trial
                  </span>
                </center>
              )}

              {split || card ? (
                <div>
                  <div className="w-full flex justify-center h-[1px] bg-slate-500 relative my-10 ">
                    <div className="absolute bg-white -bottom-3 px-4 ">
                      Or continue with
                    </div>
                  </div>

                  <div className="flex gap-5 items-center">
                    <GlobalButton
                      text="Twitter"
                      className="bg-[#1d9bf0] flex-row-reverse w-[50%] justify-center"
                      icon={<BsTwitter size={20} />}
                    />
                    <GlobalButton
                      text="GitHub"
                      className="bg-[#1d2432] flex-row-reverse w-[50%] justify-center"
                      icon={<BsGithub size={20} />}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            {card ? (
              <center className="text-sm mt-10 text-black dark:text-white">
                Not a member?{" "}
                <span className="text-violet-500 ">
                  {" "}
                  Start a 14 day free trial
                </span>
              </center>
            ) : (
              ""
            )}
          </div>
        </div>
        {split ? (
          <div className="col-span-5 hidden xl:grid">
            <img
              className="min-h-[700px] w-full object-cover"
              src={pc}
              alt=""
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
