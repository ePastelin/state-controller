import { sharingInformationService } from "../../services/sharing-information.service";

function Component1() {
  const handleClick = () => {
    sharingInformationService.setSubject(true);
  };
  const handleClickNo = () => {
    sharingInformationService.setSubject(false)
  }
  return (
    <div>
      <button onClick={handleClick}>Enviar información</button>
      <button onClick={handleClickNo}>No enviar información</button>
    </div>
  );
}
export default Component1;
