import { type NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { TakkForPameldelsen } from "../components/stage/TakkForPameldelsen";
import { Welcome } from "../components/stage/Welcome";
import { FinnWilly } from "../components/stage/FinnWilly";
import { AppContext } from "./_app";
import { AndreSmarteUtivklere } from "../components/stage/AndreSmarteUtivklere";
import { ForklarHvorfor } from "../components/stage/ForklarHvorfor";
import { MovingPaddings } from "../components/stage/MovingPaddings";
import { RememberNumber } from "../components/stage/RememberNumber";
import { Ferdig } from "../components/stage/Ferdig";
import { AreYouSure } from "../components/stage/AreYouSure";
import {Resultatliste} from "../components/stage/Resultatliste";

const Home: NextPage = () => {
  const context = useContext(AppContext);

  let stepComponent;

  switch (context?.page) {
    case 1:
      stepComponent = <TakkForPameldelsen />;
      break;
    case 2:
      stepComponent = <AndreSmarteUtivklere />;
      break;
    case 3:
      stepComponent = <FinnWilly />;
      break;
    case 4:
      stepComponent = <ForklarHvorfor />;
      break;
    case 5:
      stepComponent = <MovingPaddings />;
      break;
    case 6:
      stepComponent = <RememberNumber />;
      break;
    case 7:
      stepComponent = <AreYouSure />
      break;
    case 8:
      stepComponent = <Ferdig />;
      break;
    case 9:
      stepComponent = <Resultatliste />;
      break;
    default:
      stepComponent = <Welcome />;
      break;
  }

  if (context?.page == 0 && context.time > 0) {
    context.setTime(0);
  }

  // "context?.page < 8" is only relevant during testing
  if (context && context?.page > 0 && context?.page < 8 && !context.timerIsRunning) {
    context.startTimer();
  }

  useEffect(() => {
    if (context?.timerIsRunning) {
      setTimeout(() => {
        context.setTime(context.time + 1);
      }, 1000);
    }
  }, [context, context?.time, context?.timerIsRunning]);




  return (
    <>
      <Head>
        <title>Kantegas Nyhetsbrev</title>
        <meta name="description" content="Meld deg av Kantegas nyhetsbrev ;)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {context?.timerIsRunning &&
          <div className="fixed top-10 left-10 text-5xl">{`0${Math.floor(context.time / 60)}`.slice(-2)}:{`0${Math.floor(context.time % 60)}`.slice(-2)}</div>
          }
          {stepComponent}
      </main>
    </>
  );
};

export default Home;
