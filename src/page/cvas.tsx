import { cva } from "class-variance-authority";

export const btns = cva(
  "bg-[#0f1011] transition-all duration-300 text-[15px] text-white py-2 px-3 rounded-md flex items-center gap-2 ",
  {
    variants: {
      choice: {
        pry: "bg-[#0f1011]  text-white rounded-md flex items-center gap-2 ",
        sec: "bg-transparent text-[#0f1011] text-[18px]",
        bare: "border rounded-md bg-transparent text-[#0f1011] flex justify-center",
      },
      size: {
        sm: "text-[13px] py-[4px] px-3",
        md: "text-[15px] py-[6px] px-3",
        lg: "w-full text-[18px]",
      },
    },
    defaultVariants: {
      choice: "pry",
      size: "md",
    },
  }
);
