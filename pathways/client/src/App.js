import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {stories: []}

  componentDidMount() {
    fetch('/stories')
      .then(res => res.json())
      .then(stories => this.setState({ stories }));
  }

  render() {
    return (
      <div className="App">
        <h1>Stories</h1>
        {this.state.stories.map(story =>
          <div key={story.id}>{story.story_entry}</div>
        )}
      </div>
    );
  }
}

export default App;
