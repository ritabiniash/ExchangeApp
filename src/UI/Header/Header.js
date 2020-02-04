import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = (props) => {
    return (
        <AppBar position="static">
                <Toolbar>
                      {props.children}
                </Toolbar>
            </AppBar>
    ) ;
  };
  
export default Header;
  