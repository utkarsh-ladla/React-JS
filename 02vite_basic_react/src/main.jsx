import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>custom App</h1>
    </div>
  )
}

// const reactElement = {    this obj not working because every jsx having different expectations 
//   type: 'a',                //react doesnt allow to put any value in objects 
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>

)

const reactElement = React.createElement(
  //syntax is predefined
  'a',
  {href: 'https://google.com',target: '_blank'},
    'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

  // anotherElement,
  // reactElement

    <App />


)
