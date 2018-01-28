import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>Built by Hannes Widrig in {new Date().getFullYear()}</footer>
    );
  }
}

export default Footer;
