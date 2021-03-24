import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(5),
      marginTop:theme.spacing(-8),
      left:110,
    
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div className="Avatar">
      <Avatar className="avatar-one">P</Avatar> <div className="letra-alimentação"></div> <div className="principal"></div> &nbsp;  &nbsp;
      <Avatar className="Aluguel">A</Avatar> <div className="letra-alimentação"> </div> <div className="principal"></div>
      <Avatar className="Alimentação">A</Avatar> <div className="letra-alimentação"></div> <div className="principal"></div>
    </div>
  );
}
