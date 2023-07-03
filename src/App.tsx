import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div>
      <TextField text='Hello' person={{ firstName: '', lastName: '' }}
        handleChange={e => {
          e.stopPropagation();
      }}
      />
    </div>
  )
}

export default App;
