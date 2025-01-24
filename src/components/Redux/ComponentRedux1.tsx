import { useDispatch } from "react-redux";
import { createUser, modifyUser, resetUser } from "../../redux/states/user";

function ComponentRedux1() {
  const dispatcher = useDispatch();
  const handleClick = () => {
    dispatcher(createUser({ user: "juan", email: "juan@gmail.com" }));
  };
  const handleClickModify = () => {
    dispatcher(modifyUser({ user: "Eduardo", email: "eduardo@gmail.com" }));
  };
  const handleClickDelete = () => {
    dispatcher(resetUser());
  };
  return (
    <div>
      <button onClick={handleClick}>Enviar información en Redux CreateUser</button>
      <button onClick={handleClickModify}>Enviar información en Redux ModifyUser</button>
      <button onClick={handleClickDelete}>Enviar información en Redux ResetUser</button>
    </div>
  );
}
export default ComponentRedux1;
