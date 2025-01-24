import { useGentlemanContext } from "../context/Gentleman.context";

function ComponentContext2() {
  const { setCount, count } = useGentlemanContext();

  const handleClick = () => setCount(count + 1);

  return <button onClick={handleClick}>aumentar</button>;
}
export default ComponentContext2;
