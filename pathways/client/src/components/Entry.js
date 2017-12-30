import React, { Component } from 'react';

class Entry extends Component {
	render() {
		return(
			<div className="CenterText">{this.props.story_entry}</div>
		);
	}
}

export default Entry;