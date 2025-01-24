import { ReactNode, useState } from "react";
import { GentlemanContext } from "./Gentleman.context";

interface Props {
  children: ReactNode;
}

export const GentlemanProvider = ({ children }: Props) => {
  const [count, setCount] = useState(1);
  return <GentlemanContext.Provider value={{ count, setCount }}>{children}</GentlemanContext.Provider>;
};
