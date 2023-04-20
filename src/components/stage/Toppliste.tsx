import {useContext, useEffect, useState} from "react";
import styles from './Toppliste.module.css';
import type {Scoreboard, ScoreEntry} from "../../types";
import {AppContext} from "../../pages/_app";
import { ButtonSubmit } from "../atoms/ButtonSubmit"
import {Introduction} from "../atoms/Introduction";

export const Toppliste = () => {
  const context = useContext(AppContext);
  const [topTen, setTopTen] = useState<ScoreEntry[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined"){
      const toParse = localStorage.getItem("scoreboard")
      const scoreboard = JSON.parse(toParse || '{}') as Scoreboard;
      setTopTen(() => sortScoreEntries(scoreboard).slice(0, 10));
    }
  }, [])

  return (
    <div className="centercolumn centercolumn--centeraligned">
      <ButtonSubmit  value="Prøv Kantegas Avmeldingskonkurranse" onClick={() => context?.goToNextPage()} />
      <h1 className={styles.toppliste__h1}>🎉 Toppliste 🎉</h1>

      <Introduction>
        <ol>
          {topTen && topTen.map((entry, index) => {
            return (
                <li key={entry.nickname} className={styles.toppliste__player}>
                  <p>{index+1}. {entry.nickname}</p>
                  <p>{entry.time} sekunder</p>
                </li>
              )
          })}
        </ol>
      </Introduction>

      <img src="/Kantega_logo_hvit.svg" alt="Kantega" className={styles.toppliste__logo}/>
    </div>
  );
};


function sortScoreEntries(scoreboard: Scoreboard): ScoreEntry[] {
  const scoreEntries: ScoreEntry[] = Object.values(scoreboard);

  return scoreEntries.sort((a, b) => a.time - b.time);
}