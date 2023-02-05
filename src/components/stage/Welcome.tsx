import { useContext, useState } from "react";
import { AppContext } from "../../pages/_app"
import { ButtonSubmit } from "../atoms/ButtonSubmit"
import { Introduction } from "../atoms/Introduction";

export const Welcome = () => {

    const context = useContext(AppContext);

    const [input, setInput] = useState("");

    const handleButtonClick = (): void => {
        context?.setUserEmail(input);
        context?.goToNextPage();
    }


    return (
        <div className="centercolumn">

            <h1 className="text-2xl mb-4">Velkommen til Kantegas avmeldingsh*lvete</h1>
            <Introduction>
            <p>Vi har gått berserk med dark UX patterns og laget en konkurranse hvor du skal melde deg av Kantegas nyhetsbrev på kortest mulig tid.</p>
            </Introduction>

            <p>
            <label>Men før du kan melde deg av, må du selvfølgelig melde deg på:</label>
            <input type="text" placeholder="noen@domene.no" onChange={(e) => setInput(e.target.value)} />
            </p>

            <p>
            <ButtonSubmit value="Trykk her" disabled={!input} onClick={handleButtonClick} />
            </p>

        <img src="/Kantega_logo_hvit.svg" className="max-w-xs mt-24" />
        </div>
    )
}