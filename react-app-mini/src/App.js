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
    this.setState({picture: val})
  }

  updateName(val){
    this.setState({name: val})
  }
  
  addFriend(){
    //
    let newFriends = this.state.friend.slice()
    console.log(newFriends)
    let obj = {
      picture: this.state.picture,
      name: this.state.name
    }
    newFriends.push(obj);
    this.setState({
      friend: newFriends,
      picture: '',
      name: ''
    });
  }

  render() {
    const friendsToDisplay = this.state.friend.map((friend, i)=>{
      //display picture//display friend's name
     return(
     <div key={friend.name+i}>
        <img src={friend.picture}/>
        <span>{friend.name}</span>
      </div>
     );
    })

    console.log(friendsToDisplay);
    return (
      <div className="App">
       <h1>Picture:</h1>
        <input type="text" 
        onChange={(event)=>this.updatePicture(event.target.value)} value={this.state.picture}/>

        <h1>Name:</h1>
        <input type ="text" 
        onChange={(event)=>this.updateName(event.target.value)} value = {this.state.name}/>
        <button onClick={()=>this.addFriend()}>
        Add Friend</button>
        {friendsToDisplay}
      </div>
      
    );
  }
}

export default App;
