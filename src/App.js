import './componentes/style.css';
import Bx from './componentes/Box.js'
import Ac from './componentes/Clicar.js'
import Drawer from './Drawer.js'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Saldo from './componentes/Saldo.js'
import Pesquisa from './componentes/Pesquisa'
import Tooltip from './componentes/Tooltip'
import Avatar from './componentes/Avatar'
import Share from '@material-ui/icons/ShareOutlined';
import ArchiveIcon from '@material-ui/icons/Archive';
import LocalPrintshop from '@material-ui/icons/LocalPrintshop';
import Accordion from './componentes/Acordion'


function App() {
  return (
   <div className="R">
    <header>
    <div >
    <Pesquisa /> 
    <Bx />
    </div>
    <Ac />
 
    <div className="File" >
    <FileCopyIcon />
    </div> 
    <Saldo />


    <div className="App">
      <Drawer  />
    </div>
    
    <div className="linha">
    <Tooltip />
    <Avatar /> 
     </div>
    </header> 
    <div className="icone">
      <h3>Saldo bancário</h3>
    <LocalPrintshop color="primary"/>   &nbsp;  &nbsp;  &nbsp;  &nbsp; 
    <ArchiveIcon color="primary"/>  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
    <Share color="primary"/> &nbsp;  &nbsp;  &nbsp;  &nbsp; <br></br>
    <br></br> <br></br>
    <Accordion />
    </div>
   
     </div>
  );
}

export default App;
