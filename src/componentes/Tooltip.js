import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2,3),
    left: theme.spacing(9),
    zindex: theme.spacing(0),
    [theme.breakpoints.down('sm')]:{
      left:  theme.spacing(10),
      margin:  theme.spacing(2,1.3),


    }
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function SimpleTooltips() {
  const classes = useStyles();

  return (
    <div>
       <Tooltip title="Disponibilizado
                       Saldo:100.00
                       " 
       
       aria-label="add">
        <Fab color="black" className={classes.fab}>
       <LocalOfferIcon />
        </Fab>
      </Tooltip>
      
      <Tooltip title="Nova alocação" aria-label="add">
        <Fab color="white" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>

    
  
    </div>
  );
}
