import React from 'react';
import Header from '../header';

import './style.css';

const MarkdowEditor = ({ value, handleChange, getMarkup, handleSave }) => (
	<div className="container">
		<Header onSave={handleSave} />
		<textarea value={value} onChange={handleChange} autoFocus />

		<div className="view" dangerouslySetInnerHTML={getMarkup()} />
	</div>
);

export default MarkdowEditor;
