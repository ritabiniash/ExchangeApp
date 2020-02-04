import React, { useContext} from 'react';
import Header from "../UI/Header/Header";
import Content from "./Content";
import {ErrorContext} from "../contexts/error-context";
import Error from "../UI/Error/Error";

// mui imports
import { Typography } from '@material-ui/core';

function Layout() {
  const errorContext = useContext(ErrorContext);

    return(
      <React.Fragment>
        <Header>
          <Typography variant="h6">
            Currency Rate App
          </Typography>
        </Header>
        { errorContext.hasErrorOccured ? <Error/> : <Content/>}
      </React.Fragment>
    );
}

export default Layout;