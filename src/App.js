import React, { Component } from 'react';
import logo from './gift.png';
import './App.css';

class App extends Component {

  state ={
    items : [
      'Rollie Vertical Egg Cooker',
      'Automatic Soap Dispenser',
      'Window Bird Feeder'
    ]
  }

  addItem(evt){
    evt.preventDefault()
    console.log("adding item!")
    this.setState({
      items: this.refs.item.value
    })
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Holiday Wish List</h1>
        <form onSubmit={this.addItem.bind(this)}>
          <input ref="item"type="text" placeholder="Add to your whish list"/>
          <button onClick={this.addItem}>Add Item</button>
        </form>

        <div>
          <h2>Wish List</h2>
          <ul>{this.state.items}</ul>
        </div>


      </div>
    );
  }
}

export default App;
