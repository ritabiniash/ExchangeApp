import React, { useState } from 'react';


const ErrorContext = React.createContext({
  hasErrorOccured : false,
  errorOccured : () => {}
});

function ErrorProvider(props)  {
  const [hasErrorOccured, sethasErrorOccured] = useState(false);

  const errorOccured = () => {
    sethasErrorOccured(true);
  };


  return (
    <ErrorContext.Provider value={{ hasErrorOccured : hasErrorOccured, 
                            errorOccured :  errorOccured}}>
      {props.children}
    </ErrorContext.Provider>
  );
};

export { ErrorContext, ErrorProvider };
