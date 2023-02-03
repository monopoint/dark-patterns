import { check } from "prettier";
import { createRef, useContext, useEffect, useState } from "react";
import { checkServerIdentity } from "tls";
import { AppContext } from "../../pages/_app";
import { ButtonSubmit } from "../atoms/ButtonSubmit"
import { Introduction } from "../atoms/Introduction"

export const AreYouSure = () => {
  const context = useContext(AppContext);

  function handleClick() {
    const checkedServices = formRef.current?.querySelectorAll("div>input:checked").length;
    const checkedSubscribe = formRef.current?.querySelectorAll("#subscribe:checked").length;

    if (checkedServices === 7 && checkedSubscribe === 0) {
      context?.goToNextPage();
    } else {
      context?.goToPage(1);
    }

  }

  const formRef = createRef<HTMLFormElement>();

  return (
    <div className="centercolumn">
      <Introduction>

        <p>
          Flott!<br />
          Det er alt vi trenger å vite, du er nå klar for å melde deg av nyhetsbrevet.
        </p>

      </Introduction>

      <form ref={formRef}>
        <div className="my-6">
          <h3 className="text-2xl">Velg hvilke tjenester du vil melde deg av</h3>
          <input type={"checkbox"}></input> Kantegas nyhetsfeed<br />
          <input type={"checkbox"}></input> Råd og veiledning for studenter<br />
          <input type={"checkbox"}></input> Nyheter på epost<br />
          <input type={"checkbox"}></input> Karriereveiledning<br />
          <input type={"checkbox"}></input> Siste nytt fra Kantega<br />
          <input type={"checkbox"}></input> Kantegas triks og tips<br />
          <input type={"checkbox"}></input> Opdateringer om det som skjer<br />
        </div>
        <h3 className="text-2xl">Bruk knappen under for å bekrefte at du ikke lenger ønsker å motta nyhetsbrevet</h3>
        <input type={"checkbox"} id="subscribe"></input> Jeg ønsker ikke lenger å melde meg av nyhetsbrevet<br />
      </form>

      <p className="my-6">
        <ButtonSubmit value="OK" disabled={false} onClick={() => handleClick()} />
      </p>

    </div>
  );
};
