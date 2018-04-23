import React from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';

export const Header = ({name}) => (
	<div className="row text-center mb-4">
		<div className="col-2 text-left align-self-center">
			<Link to="/"><span className="oi oi-chevron-left"></span></Link>
		</div>
		<div className="col-8">
			<h1 className="h2">{name}</h1>
		</div>
		<div className="col-2 text-right align-self-center"></div>
	</div>
);

Header.propTypes = {
	name: PropTypes.string
};