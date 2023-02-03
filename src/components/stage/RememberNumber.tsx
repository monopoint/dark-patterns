import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../pages/_app";
import { ButtonSubmit } from "../atoms/ButtonSubmit"
import { Introduction } from "../atoms/Introduction"

export const RememberNumber = () => {
  const context = useContext(AppContext);

  const pin = 379672547;

  let [input, setInput] = useState("");


  return (
    <div className="centercolumn">
      <Introduction>

      <p>
        Du kan når som helst melde deg av nyhetsbrevet ved å ta direkte kontakt med vårt kundesenter.{" "}
        Oppgi da ditt referansenummeret slik at vi kan behandle din forespørsel raskt og effektivt. {" "}

      </p>
      <p>
        Skriv inn nummeret nedenfor for å bekrefte at dette er forstått. 
      </p>
      </Introduction>

      <p>
        <input placeholder={pin.toString()} type="text" onChange={(e) => setInput(e.target.value)} />
      </p>

      <p>
        <ButtonSubmit value="OK" disabled={input != pin.toString()} onClick={() => context?.goToNextPage()} />
      </p>

    </div>
  );
};
