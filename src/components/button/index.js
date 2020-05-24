import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ onClick, children, kind }) => (
	<button onClick={onClick} className={`btn ${kind ? '-' + kind : ''}`}>
		{children}
	</button>
);

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	kind: PropTypes.oneOf(['create', 'del']),
};

export default Button;
