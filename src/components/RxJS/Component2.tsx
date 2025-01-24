import { useEffect, useState } from "react";
import { sharingInformationService } from "../../services/sharing-information.service";

function Component2() {
  const [count, setCount] = useState(0);
  const suscription$ = sharingInformationService.getSubject();
  useEffect(() => {
    suscription$.subscribe((data) => {
      if (data) setCount(count + 1);
    });
  }, [count, suscription$]);

  return <div>{count}</div>;
}
export default Component2;
