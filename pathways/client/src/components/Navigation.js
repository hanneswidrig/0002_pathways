import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/lib/button/style/index.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Nav">
        <section className="Name">
          <a href="/">Pathways</a>
        </section>
        <section className="Count">
          <div className="StoryId">{this.props.currentLoc + 1}</div>
        </section>
        <section className="Chapters">
          <Button type="default" onClick={this.props.handleClick}>
            <span className="Chapters-text">Chapters</span>
          </Button>
        </section>
      </div>
    );
  }
}

export default Navigation;
