import { useContext } from "react";
import { AppContext } from "../../pages/_app";

export const Ferdig = () => {
  const context = useContext(AppContext);

  context?.stopTimer();

  return (
    <div className="centercolumn">
      <img src="/Kantega_logo_hvit.svg" className="max-w-sm" />
      <p>
        Du har meldt deg av nyhetsbrevet!
        <br />(gratulerer!)
      </p>
      <p className="text-2xl">
        Du brukte {context?.time} sekunder
      </p>
    </div>
  );
};
