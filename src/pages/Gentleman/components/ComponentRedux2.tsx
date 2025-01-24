import { useSelector } from "react-redux";
import { AppStore } from "../../../redux/store";

function ComponentRedux2() {
  const userState = useSelector((store: AppStore) => store.user);
  return <div>{JSON.stringify(userState)}</div>;
}
export default ComponentRedux2;
