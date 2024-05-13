import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //Hooks......
  // useState is help to change on UI
  
  let [counter, SetCounter] = useState(15)

  //let counter = 25

  const addvalue = ()=>{
    console.log("value added",counter);
    //counter = counter + 1
    SetCounter(counter + 1)
  }

  const remvalue = () => {
    if(counter > 0){
    SetCounter(counter - 1)
    }
  }

  return (
   <>
   <div class="counter">
    <h1>Chai or React </h1>
    <h2>Counter values: {counter}</h2>

    <button
    onClick={addvalue}
    >Add Value {counter}</button>
    <br />
    <button
    onClick={remvalue}
    >Remove Value {counter}</button>
    <p>check counter: {counter}</p>
    </div>
  </>

  );
}

export default App;
