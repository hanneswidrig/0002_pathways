import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/lib/button/style/index.css';

class BackButton extends Component {
  render() {
    return (
      <Button type="default" onClick={this.props.back}>
        <span className="Chapters-text">Back</span>
      </Button>
    );
  }
}

export default BackButton;
