import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import './App.css';
import Entry from './components/Entry';
import PreviousEntry from './components/PreviousEntry';
import Timeline from './components/Timeline';

class App extends Component {
	constructor() {
		super();
		this.state = {
			stories: [{id: '', story_entry: ''}],
			currentLoc: 0
		}
		ArrowKeysReact.config({
			left:  () => {
				this.prevStory();
			},
			right: () => {
				this.nextStory();
			},
			up:    () => {
				this.prevStory();
			},
			down:  () => {
				this.nextStory();
			}
		});
	}

	prevStory() {
		this.setState( (prevState, props) => {
			if (prevState.currentLoc > 0) {
				return {currentLoc: prevState.currentLoc - 1};
			}
			else if (prevState.currentLoc === 0) {
				return {currentLoc: prevState.currentLoc};
			}
		});
	}
	nextStory() {
		this.setState( (prevState, props) => {
			if (prevState.currentLoc === (prevState.stories.length - 1) ) {
				return {currentLoc: prevState.currentLoc};
			}
			else {
				return {currentLoc: prevState.currentLoc + 1};
			}
		});
	}
	isFirstStory() {
		if(this.state.currentLoc === 0) {
			return true;
		}
		else {
			return false;
		}
	}

	componentDidMount() {
		fetch('/stories')
		.then(results => results.json() )
		.then(stories => this.setState({stories}) );
	}

  render() {
    return (
      <div {...ArrowKeysReact.events} tabIndex="1" className="App">
				<div className="Entries">
				<div className="StoryId">{this.state.currentLoc}</div>
				{
					this.isFirstStory() ? null : 
					<PreviousEntry story_entry={this.state.stories[this.state.currentLoc - 1].story_entry}/>
				}
				<Entry story_entry={this.state.stories[this.state.currentLoc].story_entry}/>
				</div>
				<Timeline />
			</div>
    );
  }
}

export default App;