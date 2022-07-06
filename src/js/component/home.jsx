
import React, { useState } from 'react'
import { TodoList } from './todoListState.jsx'


function App() {
  fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        data = todos.then;  
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });


  const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoList onSubmit={text => setTodos([{ text, complete: false}, ...todos ])} />
      <div className='App'>
        {todos.map(({ text }) => (
          <div key={text}>{text}</div>))}
      </div>
    </div>
  );


}

export default App;
