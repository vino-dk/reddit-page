import React, { Component, cloneElement } from 'react';
import './App.css';
import data from './reactjs.json'

class App extends Component {
  constructor(props){
    super(props);
    //to initalise states
  }

  componentDidMount(){
    // after initial render cycle, fetch data here.
  }

  render(){
    return (
      <div>Say hello</div>
    );
  }
}

//console.log(data.children[1].data)
//console.log(data)
export default App;
