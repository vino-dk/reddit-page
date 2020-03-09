import React, { Component } from 'react';
import './App.css';
import data from './Data';
import Story from './components/Story';

class App extends Component {

  componentDidMount(){
    // after initial render cycle, fetch data here.
  }

  render(){
    console.log(data.data.children['0'].data.title);
    return (
      <div>
        <Story 
        title={data.data.children['0'].data.title}
        score={data.data.children['0'].data.score}
        url = {data.data.children['0'].data.url}
        />
      </div>
    );
  }
}

//console.log(data.children[1].data)
//console.log(data)
export default App;
