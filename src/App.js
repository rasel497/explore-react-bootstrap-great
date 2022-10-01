import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './componants/GridCard/GridCard';
import Header from './componants/Header/Header';
import OffcanvasNav from './componants/OffcanvasNav/OffcanvasNav';
import ToastNotify from './componants/Toast/ToastNotify';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <OffcanvasNav></OffcanvasNav>

      <Button variant='warning'>React Button</Button>
      <Spinner animation="grow" variant="info"></Spinner>
      <ToastNotify></ToastNotify>

      <GridCard></GridCard>
    </div>
  );
}

export default App;
