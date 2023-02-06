import { ChangeEvent, useContext, useEffect, useState } from "react";
import { AppContext } from "../../pages/_app";
import { ButtonSubmit } from "../atoms/ButtonSubmit"
import { ButtonLink } from "../atoms/ButtonLink"
import { Introduction } from "../atoms/Introduction"

export const ForklarHvorfor = () => {
  const context = useContext(AppContext);
  const [showInput, setShowInput] = useState(false)
  const [input, setInput] = useState("");
  const [begrunnelse, setBegrunnelse] = useState("");
  const [wordcount, setWordcount] = useState(0);


  const handleBegrunnelseChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBegrunnelse(e.target.value)
    const text = e.target.value;
    const words = text.trim().split(' ')
    setWordcount(words.length);
  }


  return (
    <div className="centercolumn">
      <Introduction>

      <p>Magnus bruker <u>mye tid</u> hver dag på å skrive våre <u>fantastiske</u> nyhetsbrev. Ved å <u>melde deg av</u> nyhetsbrevet, 
      sørger du for at Magnus er et skritt nærmere å sitte <u>uten arbeidsoppgaver</u>. Du må {' '}
      <ButtonLink onClick={() => setShowInput(true)} value="bekrefte e-postadressen" /> du vil melde av nyhetsbrevet.
      
      
      </p>
      </Introduction>

      { showInput && (
      <p>
        <label title={context?.userEmail}>E-post <span className="hidden_in_background">{context?.userEmail}</span></label>
        <input type="text" onChange={(e) => setInput(e.target.value)}  /> 
      </p>
      )}

      <label>Bruk tretten ord på å gi en tilbakemelding til Magnus hvor du begrunner hvorfor din tomme innboks er mer verdt enn jobben hans:</label>
      <textarea rows={10} onChange={(e) => handleBegrunnelseChange(e)}>

      </textarea>

      <p className="my-6">
        <ButtonSubmit value="Jeg bryr meg bare om meg selv" disabled={input != context?.userEmail || wordcount != 13} onClick={() => context?.goToNextPage()} />
      </p>

    </div>
  );
};
