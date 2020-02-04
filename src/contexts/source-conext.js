import React, { useState } from 'react';

// set USD ans ILS as default currencies
const SourceContext = React.createContext({
  sourceCurrency : "USD",
  targetCurrency : "ILS",
  changeSource : () => {},
  changeTarget : () => {}
});

function SourceProvider(props)  {
  const [sourceCurrency, setSourceCurrency] = useState("USD");
  const [targetCurrency, setTargetCurreny] = useState("ILS");

  const changeSource = (newSource) => {
    setSourceCurrency(newSource);
  };

  const changeTarget = (newTarget) => {
    setTargetCurreny(newTarget);
  };

  return (
    <SourceContext.Provider value={{ sourceCurrency : sourceCurrency,
                                     changeSource : changeSource, 
                                     targetCurrency : targetCurrency,
                                    changeTarget : changeTarget}}>
      {props.children}
    </SourceContext.Provider>
  );
};

export { SourceContext, SourceProvider };
