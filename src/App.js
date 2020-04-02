import React, { Component } from 'react';
import './App.css';
import data from './Data';
import StoryList from './components/StoryList';

class App extends Component {

  componentDidMount(){
    // after initial render cycle, fetch data here.
  }

  render(){
    console.log(data.data.children['0'].data.title);
    return (
      <div>
        <StoryList
          stories={data.data.children}
        />
      </div>
    );
  }
}

//console.log(data.children[1].data)
//console.log(data)
export default App;
