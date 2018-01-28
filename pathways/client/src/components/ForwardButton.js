import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/lib/button/style/index.css';

class FowardButton extends Component {
  render() {
    return (
      <Button
        disabled={this.props.lastStory}
        type="default"
        onClick={this.props.next}
      >
        <span className="Chapters-text">Next</span>
      </Button>
    );
  }
}

export default FowardButton;
