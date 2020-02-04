import React from "react";

// mui imports
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';



const RateItem = (props) => {
  
    return (
          <ListItem>
            <ListItemText
              primary={props.currencyName}
            />
            <ListItemSecondaryAction>
              {props.currencyRate.toFixed(4)}
            </ListItemSecondaryAction>
          </ListItem>
    ) ;
  };
  
  export default RateItem;
  