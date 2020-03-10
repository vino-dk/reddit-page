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
        thumbnail = {data.data.children['5'].data.thumbnail}
        created = {data.data.children['0'].data.created_utc}
        author = {data.data.children['0'].data.author_fullname}
        num_comments = {data.data.children['0'].data.num_comments}
        />
      </div>
    );
  }
}

//console.log(data.children[1].data)
//console.log(data)
export default App;
