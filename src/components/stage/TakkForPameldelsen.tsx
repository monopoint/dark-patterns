import { useContext } from "react";
import { AppContext } from "../../pages/_app";
import { ButtonSubmit } from "../atoms/ButtonSubmit"
import { Introduction } from "../atoms/Introduction"
import styles from './TakkForPameldelsen.module.css';

export const TakkForPameldelsen = () => {
  const context = useContext(AppContext);

  return (
    <>
    <div className={styles.takkforpameldelsen}>
      <div className="centercolumn">
      <Introduction>
        <p>
              Tusen takk for at du vil motta nyhetsbrev fra oss. 
        </p>
      </Introduction>
      </div>
        

      <div className={styles.takkforpameldelsen__image}>
      </div>

    </div>
    <div className={styles.takkforpameldelsen__footer}>

      <ButtonSubmit value="Meld meg av nyhetsbrevet" onClick={() => context?.goToNextPage()} />
    </div>
    </>
  );
};
