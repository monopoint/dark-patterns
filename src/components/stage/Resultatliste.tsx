import {useEffect, useState} from "react";
import styles from './Ferdig.module.css';
import type {Scoreboard, ScoreEntry} from "../../types";

export const Resultatliste = () => {

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
      <h1>Resultater</h1>
      <ol>
        {topTen && topTen.map(entry => {
          return (
              <li key={entry.nickname}>
                <p>Spiller: {entry.nickname} Tid: {entry.time}</p>
              </li>
            )
        })}
      </ol>
      <img src="/Kantega_logo_hvit.svg" alt="Kantega" className={styles.ferdig__logo}/>
    </div>
  );
};


function sortScoreEntries(scoreboard: Scoreboard): ScoreEntry[] {
  const scoreEntries: ScoreEntry[] = Object.values(scoreboard);

  return scoreEntries.sort((a, b) => a.time - b.time);
}