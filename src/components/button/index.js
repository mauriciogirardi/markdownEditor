import React from 'react';
import './style.css';

const Button = ({ onClick, children, kind }) => (
	<button onClick={onClick} className={`btn -${kind}`}>
		{children}
	</button>
);

export default Button;
