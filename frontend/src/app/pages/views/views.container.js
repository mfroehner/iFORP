import React from 'react';
import {PropTypes} from 'prop-types';

import {FormatJson} from '../../shared/format-json';

export class Views extends React.Component {

	state = {};

	componentDidMount() {

		// Get ID from path parameters
		this.setState(this.props.match.params);
	}

	render() {
		return (
			<main id="" className="container">
				<FormatJson state={this.state}></FormatJson>
			</main>
		);
	}
}

Views.propTypes = {
	match: PropTypes.object
};
