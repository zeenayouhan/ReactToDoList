import React,{Component } from 'react';
import './App.css';
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';

 const uuid= require('uuid/v1')

class App extends Component{
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem: false
  }
  handleSubmit=(e)=>{
    e.preventDefault();


    const newItem={
      id:this.state.id,
      item:this.state.item
    }
    console.log(newItem);

    const updatedItems=[...this.state.items,newItem]

    this.setState({
      items:updatedItems,
      item:'', 
      id:uuid(),
      editItem: false
    })

  }
  handleChange=e=>{
    this.setState({
      item: e.target.value
    });
  };
  render() {
    return (  
    
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
        <h3 className="text-capitalize text-center">To do Input</h3>
        <TodoInput
        item={this.state.item} 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
        <TodoList items={this.state.items}/>
        
        </div>
        
      </div>
    </div>
    
  );
}
}

export default App;
