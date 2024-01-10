import { cn } from "./cns";
import { btns } from "./cvas";

export const GlobalButton = ({
  text,
  className,
  nobg,
  icon,
  choice,
  size,
  ...props
}: any) => (
  <button {...props} className={cn(btns({ choice, size }), className)}>
    <div>{text}</div>
    <div>{icon}</div>
  </button>
);
