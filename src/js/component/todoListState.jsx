import React, { useState } from 'react'

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  }
  
}

export const TodoList = ({onSubmit}) => {
  const {resetValue, ...text} = useInputValue("");

    return (
        <form className='App' onSubmit={e => {
          e.preventDefault();
          onSubmit(text.value);
          resetValue();
        }}>
        <h2>This is my Todo List</h2>
        <input id="taskInput" placeholder='enter task here' {...text}></input>
        
      
      </form>
    );
  }