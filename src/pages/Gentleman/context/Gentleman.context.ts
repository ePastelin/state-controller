import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface GentlemanContextInterface {
  count: number | null;
  setCount: Dispatch<SetStateAction<number>> | null;
}

export const GentlemanContext = createContext<GentlemanContextInterface>({ count: 0, setCount: null });


export const useGentlemanContext = () => {
  const { count, setCount } = useContext(GentlemanContext);

  if (!count || !setCount) throw new Error("No elemets in the context");

  return { count, setCount };
};
