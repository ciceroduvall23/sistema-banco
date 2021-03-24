import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    top: -44,
    right: 0,
    left: 170,
  },
  dropdown: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function ClickAway() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="conta-corrente">
        <button type="button" onClick={handleClick}>
          Conta Corrente<br></br>
          Ag:000001 &emsp; CC:000000-2 &#8201;
        </button>
        {open ? (
          <div className="dropdown">

           <div className="cor-conta">
           Conta Corrente <br></br>
           Ag:000001 &emsp;  CC:000000-2 &emsp; 
           <p></p>
           Conta Corrente<br></br>
           Ag:000001 &emsp;  CC:000000-2 &emsp; 
           </div>

          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
