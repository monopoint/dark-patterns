import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../pages/_app";
import { ButtonSubmit } from "../atoms/ButtonSubmit"
import { ButtonLink } from "../atoms/ButtonLink"
import { Introduction } from "../atoms/Introduction"
import styles from './AndreSmarteUtviklere.module.css';

export const AndreSmarteUtivklere = () => {
  const context = useContext(AppContext);

  const [count, setCount] = useState(Math.floor(Math.random() * 10000) + 10000);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, Math.random() * 1000);
  }, [count]);

  return (
    <div className="centercolumn">
      <Introduction>
      <p>
        Det kan virke som du tenker å melde deg av Kantegas utrolig viktige nyhetsbrev.
      </p>
      <p>Hvis du melder deg av vil du gå glipp av våre utrolig viktige nyheter og tips som gir deg de rådene du trenger for å skaffe deg jobb etter studiene.</p>
      </Introduction>
      <p className={styles.andresmarteutviklere__counter}>{count} fremtidsrettede designere har allerede meldt seg på nyhetsbrevet. <br />Vær en del av gjengen!</p>

      <div className={styles.andresmarteutviklere__choices}>
      <p className={styles.andresmarteutviklere__begrensetplass}>
        Kapasiteten er begrenset, ikke mist plassen din!
        </p>
      <p>
          🔥🔥🔥 &nbsp;&nbsp;&nbsp; <ButtonSubmit disabled={false} value="Jeg bryr meg om fremtiden min, og vil motta nyhetsbrev" variant="green" onClick={() => context?.goToPage(1)} /> &nbsp;&nbsp;&nbsp; 🔥🔥🔥
      </p>
      <p className={styles.andresmarteutviklere__ingenambisjoner}>
        <ButtonLink value="Jeg har ingen ambisjoner" onClick={() => context?.goToNextPage()} />
      </p>
      </div>
    </div>
  );
};
