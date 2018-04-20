import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
      this.state={
        friend: [],
        picture: '',
        name: ''
    }
  }
  
  updatePicture(val){
    this.setState({picture: val.target.value})
  }

  updateName(val){
    this.setState({friend: val.target.value})
  }
  
  render() {
    return (
      <div className="App">
       <h3>Picture:</h3>
        <input type="text" 
        onChange={(event)=>this.updatePicture(event)}/>

        <h3>Name:</h3>
        <input type ="text" 
        onChange={(event)=>this.updateName(event)}/>
      </div>
    );
  }
}

export default App;
