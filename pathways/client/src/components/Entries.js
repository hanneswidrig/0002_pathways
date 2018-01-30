import React, { Component } from 'react';
import Entry from './Entry';

class Entries extends Component {
  render() {
    return (
      <div className="Entries">
        <Entry story_entry={this.props.story.story_entry} />
      </div>
    );
  }
}

export default Entries;
