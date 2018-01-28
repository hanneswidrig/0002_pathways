import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import Entry from './components/Entry';
import PreviousEntry from './components/PreviousEntry';
import StoryEntryPager from './components/StoryEntryPager';
// import Entries from './components/Entries';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stories: [{ id: '', story_entry: '' }],
      active: false,
      currentLoc: 0
    };
    ArrowKeysReact.config({
      left: () => {
        this.prevStory();
      },
      right: () => {
        this.nextStory();
      }
    });
    this.prevStory = this.prevStory.bind(this);
    this.nextStory = this.nextStory.bind(this);
    this.isFirstStory = this.isFirstStory.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ active: !this.state.active });
  }
  prevStory() {
    this.setState((prevState, props) => {
      if (prevState.currentLoc > 0) {
        return { currentLoc: prevState.currentLoc - 1 };
      } else if (prevState.currentLoc === 0) {
        return { currentLoc: prevState.currentLoc };
      }
    });
  }
  nextStory() {
    this.setState((prevState, props) => {
      if (prevState.currentLoc === prevState.stories.length - 1) {
        return { currentLoc: prevState.currentLoc };
      } else {
        return { currentLoc: prevState.currentLoc + 1 };
      }
    });
  }
  isFirstStory() {
    if (this.state.currentLoc === 0) {
      return true;
    } else {
      return false;
    }
  }

  componentDidMount() {
    fetch('/stories')
      .then(results => results.json())
      .then(stories => this.setState({ stories }));
    this.refs.app.focus();
  }

  render() {
    return (
      <div {...ArrowKeysReact.events} tabIndex="1" className="App" ref="app">
        <Navigation
          currentLoc={this.state.currentLoc}
          handleClick={this.handleClick}
        />
        <div className="Entries">
          {this.isFirstStory() ? null : (
            <PreviousEntry
              story_entry={
                this.state.stories[this.state.currentLoc - 1].story_entry
              }
            />
          )}
          <Entry
            story_entry={this.state.stories[this.state.currentLoc].story_entry}
          />
        </div>
        {this.state.active && <Timeline />}
        <StoryEntryPager
          back={this.prevStory}
          next={this.nextStory}
          lastStory={
            this.state.currentLoc + 1 === this.state.stories.length
              ? true
              : false
          }
        />
        <Footer />
      </div>
    );
  }
}

export default App;
