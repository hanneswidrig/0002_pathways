import React, { Component } from 'react';
import BackButton from './BackButton';
import ForwardButton from './ForwardButton';

class StoryEntryPager extends Component {
  render() {
    return (
      <div className="StoryEntryPager">
        <BackButton back={this.props.back} />
        <ForwardButton
          lastStory={this.props.lastStory}
          next={this.props.next}
        />
      </div>
    );
  }
}

export default StoryEntryPager;
