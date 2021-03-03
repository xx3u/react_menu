import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './List.css';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetList(props) {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} id={props.id} aria-label="contacts">
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src={props.image} alt=""/>            
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          secondary={'X ' + props.quantity} 
        />
        <ListItemText
          primary={props.price + " KZT"}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={props.delete}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List> 
  );
}