import React from 'react';
import './App.css';
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from "uuid";


function App() {
  return (
    
    
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
        <h3 className="text-capitalize text-canter">To do Input</h3>
        <TodoList/>
        <TodoInput/>
        </div>
        
      </div>
    </div>
    
  );
}

export default App;
