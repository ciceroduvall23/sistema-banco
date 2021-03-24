import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import VisibilityOffI from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><div className="data-saldo">Data de saldo  10/03/21</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Saldo atualizado ás 16:01
          </Typography>
          <AutorenewIcon />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><CheckCircleOutlineIcon /> Saldo disponível  &nbsp; &nbsp;<VisibilityOffI /><br></br>  &nbsp; &nbsp; <div className="saldo-body">R$ 110.50</div></Typography>
        </AccordionSummary>
        <AccordionDetails>
         
              <Typography>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
  );
}
