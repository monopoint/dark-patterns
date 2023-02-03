import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../pages/_app";
import { Introduction } from "../atoms/Introduction"
import styles from './FinnWilly.module.css';

export const FinnWilly = () => {
  const context = useContext(AppContext);

  return (
    <>
      <div className="centercolumn">
        <Introduction>

      <p>Vi må vite at du ikke er en robot. Finn Willy for å gå videre.</p>
        </Introduction>
      </div>
        
        <div className={styles.finnwilly__imagecontainer}>
        <button
          onClick={() => context?.goToNextPage()}
          className={styles.finnwilly__button}
          tabIndex="-1"
        >
        </button>
        </div>
    </>
  );
};
