import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/lib/button/style/index.css';

class FowardButton extends Component {
  render() {
    return (
      <Button
        className="Button"
        disabled={this.props.lastStory}
        type="default"
        onClick={this.props.next}
      >
        <span>Next</span>
      </Button>
    );
  }
}

export default FowardButton;
