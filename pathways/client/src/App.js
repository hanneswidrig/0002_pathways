import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			stories: []
		}
	}

	componentDidMount() {
		fetch('/stories')
		.then(results => results.json() )
		.then(stories => this.setState( {stories}, this.getList ) );
	}

	getList() {
		let stories = this.state.stories;
		console.log(stories[0].id);
		console.log(stories[0].story_entry);
	}

  render() {
    return (
      <div className="App">
				<div className="BeforeCenter">{this.state.stories[0].id}</div>
				<Entry />
      </div>
    );
  }
}

class Entry extends Component {
	render() {
		return(
			<div className="CenterText">{}</div>
		);
	}
}

export default App;

/* const stories = [
	{id: 0, story_entry: 'Welcome to the Jungle'},
	{id: 1, story_entry: 'What is your name?'},
	{id: 2, story_entry: 'You enter the forest'}
]; */

// {this.state.stories.map( (stories) =>
// <div className="CenterText" key={stories.id}>{stories.story_entry}</div>)}