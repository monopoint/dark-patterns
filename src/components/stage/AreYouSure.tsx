import { check } from "prettier";
import { createRef, useContext, useEffect, useState } from "react";
import { checkServerIdentity } from "tls";
import { AppContext } from "../../pages/_app";
import { ButtonSubmit } from "../atoms/ButtonSubmit"
import { Introduction } from "../atoms/Introduction"
import styles from './AreYouSure.module.css';

export const AreYouSure = () => {
  const context = useContext(AppContext);

  function handleClick() {
    const checkedServices = formRef.current?.querySelectorAll(".service:checked").length;
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

        <fieldset className={styles.areyousure__fieldset}>

          <h3 className={styles.areyousure__header}>Velg hvilke tjenester du vil melde deg av</h3>

          <p className={styles.areyousure__choice}><input className="service" type={"checkbox"} />Kantegas nyhetsfeed</p>
          <p className={styles.areyousure__choice}><input className="service" type={"checkbox"} />Råd og veiledning for studenter</p>
          <p className={styles.areyousure__choice}><input className="service" type={"checkbox"} />Nyheter på epost</p>
          <p className={styles.areyousure__choice}><input className="service" type={"checkbox"} />Karriereveiledning</p>
          <p className={styles.areyousure__choice}><input className="service" type={"checkbox"} />Siste nytt fra Kantega</p>
          <p className={styles.areyousure__choice}><input className="service" type={"checkbox"} />Kantegas triks og tips</p>
          <p className={styles.areyousure__choice}><input className="service" type={"checkbox"} />Oppdateringer om det som skjer</p>

        </fieldset>

        <fieldset className={styles.areyousure__fieldset}>

          <h3 className={styles.areyousure__header}>Bruk knappen under for å bekrefte at du ikke lenger ønsker å motta nyhetsbrevet</h3>

          <p className={styles.areyousure__choice}><input type={"checkbox"} id="subscribe" />Jeg ønsker ikke lenger å melde meg av nyhetsbrevet</p>

        </fieldset>

      </form>


        <ButtonSubmit value="Bekreft" onClick={() => handleClick()} />


    </div>
  );
};
