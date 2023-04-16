import {useContext, useEffect, useState} from "react";
import { AppContext } from "../../pages/_app";
import { Introduction } from "../atoms/Introduction"
import styles from './Ferdig.module.css';
import {ButtonSubmit} from "../atoms/ButtonSubmit";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

interface ScoreEntry {
  nickname: string,
  time: number
}
interface Scoreboard {
  [email: string]: ScoreEntry
}

function Konkurranseskjema() {
  const context = useContext(AppContext);

  const [scoreboard, setScoreboard] = useState<Scoreboard>();

  useEffect(() => {
    if (typeof window !== "undefined"){
      const toParse = localStorage.getItem("scoreboard")
      setScoreboard(() => JSON.parse(toParse || '{}'));
    }
  }, [scoreboard])

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");

  const handleButtonClick = (): void => {
    if (typeof window !== "undefined" && scoreboard && context){

      // Don't save if worse than previous best:
      const previousBest = scoreboard[email];
      if (previousBest && previousBest.time <= context.time) {
        context.goToNextPage();
        return;
      }

      // Save score
      scoreboard[email] = {
        nickname: nickname,
        time: context.time || 0,
      }

      localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
      context.goToNextPage();
    }
  }

  return (
    <div>
      <p>Husk å fylle inn kontaktinfo, så du kan haven på Topplista, og være med i trekningen av fete premier.</p>
      <input type="text" placeholder="noen@domene.no" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Navn eller kallenavn" onChange={(e) => setNickname(e.target.value)} />
      <p>Vi sletter all info så raskt som mulig etter at vinnere er trukket og kontaktet. Du får ingen nyhetsbrev, vi lover!</p>
      <ButtonSubmit value="Trykk her" disabled={!input} onClick={handleButtonClick} />
    </div>

  );
}

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
