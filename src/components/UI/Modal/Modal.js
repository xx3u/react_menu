import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import './Modal.css';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" color="primary">Order Details</h2>
      <form>
        <FormControl>
          <InputLabel htmlFor="address">Address</InputLabel>
          <Input id="address" onChange={props.onchange} value={props.address}/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" onChange={props.onchange} value={props.name}/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="telephone">Telephone</InputLabel>
          <Input id="telephone" onChange={props.onchange} value={props.telephone}/>
        </FormControl>
        <Button variant="outlined" size="medium" color="primary" className="createOrder" onClick={props.createOrder}>
          Create Order
        </Button>
      </form>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onclose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
