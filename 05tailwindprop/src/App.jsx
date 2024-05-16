import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/card';


function App() {
  const [count, setCount] = useState(0);
//  passing object ans arrays using variable in properties....
  //     <Card channel="chai aur code" someobj = {newArr}  />
let myobj ={
    username: "Utkarsh",
    age: 10
  }

  let newArr=[1,2,3,4]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
     <Card username="chai aur code" btnText="click me"  />
     <Card username="utkarsh " btnText="visit Profile"/>
    </>
  );
}

export default App;
