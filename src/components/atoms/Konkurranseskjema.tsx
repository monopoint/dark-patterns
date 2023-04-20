import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../pages/_app";
import {ButtonSubmit} from "./ButtonSubmit";
import type {Scoreboard} from "../../types";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import styles from "./Konkurransesjema.module.css"

export function Konkurranseskjema() {
  const context = useContext(AppContext);

  const [scoreboard, setScoreboard] = useState<Scoreboard>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const toParse = localStorage.getItem("scoreboard")

      setScoreboard(() => JSON.parse(toParse || '{}') as Scoreboard);
    }
  }, [scoreboard])

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");

  const handleButtonClick = (): void => {
    if (typeof window !== "undefined" && scoreboard && context) {

      // Don't save if worse than previous best:
      const previousBest = scoreboard[email];
      if (previousBest && previousBest.time <= context.time) {
        context.goToPage(0);
        return;
      }

      // Save score
      scoreboard[email] = {
        email: email,
        nickname: nickname,
        time: context.time || 0,
      }

      localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
      context.goToPage(0);
    }
  }

  return (
    <div className="text-left">
      <p>Husk å fylle inn kontaktinfo, så du kan havne på Topplista, og være med i trekningen av premier 🏆</p>
      <div className={styles.konkurranseskjema__input_wrapper}>
        <div className={styles.konkurranseskjema__input}>
          <p>Epost:</p>
          <input type="text" placeholder="noen@domene.no" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className={styles.konkurranseskjema__input}>
          <p>Navn eller kallenavn:</p>
          <input type="text" placeholder="Navn eller kallenavn" onChange={(e) => setNickname(e.target.value)}/>
        </div>
      </div>
      <p>Vi sletter all info så raskt som mulig etter at vinnere er trukket og kontaktet. Du får ingen nyhetsbrev, vi
        lover!</p>
      <ButtonSubmit value="Trykk her" disabled={!input} onClick={handleButtonClick}/>
    </div>

  );
}