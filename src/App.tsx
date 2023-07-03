import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { TextField } from './TextField';
import { Counter } from './Counter';

const App: React.FC = () => {
  return (
    <div>
      {/* <TextField text='Hello' person={{ firstName: '', lastName: '' }}
        handleChange={e => {
          e.stopPropagation();
      }}
      /> */}

      <Counter>
        {({count, setCount}) => (<div>{count}<button onClick={()=> setCount(count+1)}>+</button></div>)}
      </Counter>
    </div>
  )
}

export default App;
