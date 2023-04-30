import './App.css';
import { useState } from "react"

function App() {
  let [state, setState] = useState(false)
  return (
    <div className="app">
      <h1 onClick={() => setState(!state)} >click here</h1>
      {
        state ? <h3 style={{color:'white'}} >you can see me</h3> : <h3>i am gone</h3>
      }

    </div>
  );
}

export default App;
