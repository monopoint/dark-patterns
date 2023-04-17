import {useContext} from "react";
import {AppContext} from "../../pages/_app";
import {Introduction} from "../atoms/Introduction"
import styles from './Ferdig.module.css';
import {Konkurranseskjema} from "../atoms/Konkurranseskjema";

export const Ferdig = () => {
  const context = useContext(AppContext);

  context?.stopTimer();

  return (
    <div className="centercolumn centercolumn--centeraligned">
      <Introduction>
        <p>Du har nå meldt deg av nyhetsbrevet. (Gratulerer)</p>
      </Introduction>
      <img src="/brukeropplevelse.png" alt="Illustrasjon av en mann som sklir ned en sklie." />

      <p>Din score:</p>
      <p className={styles.ferdig__time}>
        {context?.time} sekunder
      </p>
      <Konkurranseskjema/>
      <img src="/Kantega_logo_hvit.svg" alt="Kantega" className={styles.ferdig__logo}/>
    </div>
  );
};
