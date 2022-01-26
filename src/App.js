import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Exemple1 from './components/exemple1/exemple1';
import Exemple2 from './components/exemple2/exemple2';

function App() {

  const [exemple, setExemple] = useState(1);

  return (
    <div className="App">
      <button onClick={() => setExemple(1)}>
        Exemple 1
      </button>
      <button onClick={() => setExemple(2)}>
        Exemple 2
      </button>

      <div className=''>
        <div>
        {
          exemple === 1 && (
            <Exemple1/>
          )
        }
        </div>
        <div>
        {
          exemple === 2 && (
            <Exemple2/>
          )
        }
        </div>
      </div>
    </div>
  );
}

export default App;
