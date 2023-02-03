import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../pages/_app";
import { ButtonSubmit } from "../atoms/ButtonSubmit"
import styles from './MovingPaddings.module.css';

export const MovingPaddings = () => {
  const context = useContext(AppContext);


  return (
    <div className="centercolumn">
      <marquee>NB: Avmeldingsfunksjonaliteten er noe ustabil for øyeblikket</marquee>

      <img src="oh no" className="w-lg h-24 mt-6 border" alt="Laster avmeldingsprogramvare" />
      <div className={styles.movingpaddings}>
      <div className={styles.movingpaddings}>
      <div className={styles.movingpaddings}>
      <div className={styles.movingpaddings}>
      <div className={styles.movingpaddings}>
      <div className={styles.movingpaddings}>
      <div className={styles.movingpaddings}>
      <div className={styles.movingpaddings}>
      <div className={styles.movingpaddings}>
      <div className={styles.movingpaddings}>
      <div className={styles.movingpaddings}>
      <ButtonSubmit value="Neste" onClick={() => context?.goToNextPage()} />
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};
