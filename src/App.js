import './App.css';
import Navmenu from './components/Navmenu';
import Carouselmenu from './components/Carouselmenu';
import Brands from './components/Brands';
import Content from './components/Content';
import { Row, } from 'react-bootstrap'



function App() {
  return (
    <div className="">

      <Navmenu />
      <Carouselmenu />
      <Brands />
      <div className="container">
        <Row className="justify-content-center" md={4} > <Content /> </Row>

      </div>
    
     <footer>



     </footer>
     </div>
  );
}

export default App;
