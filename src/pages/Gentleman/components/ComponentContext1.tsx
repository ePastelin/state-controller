import { useGentlemanContext } from "../context/Gentleman.context";

function ComponentContext1() {
  const { count } = useGentlemanContext();

  return <div>{count}</div>;
}
export default ComponentContext1;
