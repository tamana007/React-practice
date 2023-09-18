import { useState } from 'react';
import './App.css';
import Home from './components/Home';

function App() {

  const [name, setName] = useState("Tamana")

  const onClickButton = ()=>{
    setName("omar")
  }

  return (
    <div className="App">
      <div>
        <button onClick={onClickButton}>
          Change name
        </button>
        {name}
        <Home />
        {
        name === "Tamana" ? (
          <div>
            Hello This is {name}
          </div>
        ) : (<div>
          Don't worry about my name
        </div>)
        }
      </div>
    </div>
  );
}

export default App;

