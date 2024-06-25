// React Steps:

// 1-> Import React and ReactDOM libraries
import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import ReactDOM from 'react-dom/client';
// 2-> Get a reference to the div with ID root
const element = document.getElementById('root')
// 3-> Tell React to take control of that element
const root = ReactDOM.createRoot(element);
// 4-> Create a Component
function App() {
  /*
  let message = "Bye there"
  const name = "X"
  if (Math.random > 0.5) {
    message = "Hi there"
    
  }
    */
  //return <h1>Hello there {name}. {message} {name}.</h1>;
  //return <h1>{new Date().toLocaleTimeString()}</h1>;
  //return <input style={{border: '3px solid red'}} type='number' min={2} max={9}/>
  return <textarea autoFocus={true}/>
}
// 5-> Show the Component on screen
root.render(<App />)

