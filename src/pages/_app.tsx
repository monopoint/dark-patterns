import { type AppType } from "next/dist/shared/lib/utils";
import { createContext, useState } from "react";

import "../styles/globals.css";

const context: {
  page: number;
  nextPage: () => void;
} = {
  page: 0,
  nextPage: nextPage,
};

function nextPage() {
  context.page = context.page + 1;
}

export type Context = {
  page: number;
  userName: string;
  userEmail: string;
  time: number;
  timerIsRunning: boolean;
  goToNextPage: () => void;
  goToPage: (pageNumber: number) => void;
  setUserName: (name: string) => void;
  setUserEmail: (name: string) => void;
  setTime: (time: number) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

export const AppContext = createContext<Context | null>(null);

const MyApp: AppType = ({ Component, pageProps }) => {
  const [page, setPage] = useState(7);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [time, setTime] = useState(0);
  const [timerIsRunning, setTimerIsRunning] = useState(false);

  function goToNextPage() {
    setPage(page + 1);
  }

  function goToPage(pageNumber: number) {
    setPage(pageNumber);
  }

  function _setUserName(name: string) {
    setUserName(name);
  }

  function _setUserEmail(email: string) {
    setUserEmail(email);
  }

  function startTimer() {
    setTimerIsRunning(true);
  }

  function stopTimer() {
    setTimerIsRunning(false);
  }



  const context = {
    page: page,
    userName: userName,
    userEmail: userEmail,
    time: time,
    timerIsRunning: timerIsRunning,
    setUserName: setUserName,
    setUserEmail: setUserEmail,
    goToNextPage: goToNextPage,
    goToPage: goToPage,
    setTime: setTime,
    startTimer: startTimer,
    stopTimer: stopTimer,
  };

  return (
    <AppContext.Provider value={context}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default MyApp;
