import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <VendingMachine />
      </BrowserRouter>
    </div>
  );
}

export default App;
