import React, { Component } from 'react';

class PreviousEntry extends Component {
	render() {
		return(
			<div className="BeforeCenter">{this.props.story_entry}</div>
		);
	}
}

export default PreviousEntry;