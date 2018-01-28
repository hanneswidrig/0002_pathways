import React, { Component } from 'react';
import Entry from './Entry';
import PreviousEntry from './PreviousEntry';

class Entries extends Component {
  render() {
    return (
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
    );
  }
}

export default Entries;
