import React,{Component } from 'react';
import './App.css';
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';

import uuidv4 from 'uuid/v4';

class App extends Component{
  state={
    items:[],
    id:uuidv4(),
    item:'',
    editItem: false
  }
  handleSubmit=(e)=>{
    e.preventDefault();


    const newItem={
      id:this.state.id,
      title:this.state.item
    }
    console.log(newItem);
   
    const updatedItems=[...this.state.items,newItem]

    this.setState({
      items:updatedItems,
      item:'', 
      id:uuidv4(),
      editItem: false
    })
   
  }
  clearList=()=>{
    this.setState({
      items:[]
    })
  }

  handleChange=e=>{
    this.setState({
      item: e.target.value
    });
  };
  handleDelete=id=>{
    const filterItems=this.state.items.filter(item=>
      item.id !==id);
    this.setState({
      items:filterItems
        
    })
  }
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
        <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete}/>
        
        </div>
        
      </div>
    </div>
    
  );
}
}

export default App;
