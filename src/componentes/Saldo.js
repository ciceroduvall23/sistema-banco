import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
    root: {
       /* paddingLeft: theme.spacing(70),*/
       marginLeft: theme.spacing(90),
       marginTop:theme.spacing(-10),
        
        
    },
  paper: {
    color:'green',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimplePopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
     <div className="Saldo"> 
     <button aria-describedby={id} type="button" onClick={handleClick}>
        Saldo
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>R$ 110,50.</div>
      </Popper>
    </div>
  );
}
