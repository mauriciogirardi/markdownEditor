import React from 'react';
import Header from '../header';

import './style.css';

const MarkdowEditor = ({ value, handleChange, getMarkup, isSaving }) => (
	<div className="container">
		<Header isSaving={isSaving} />
		<textarea value={value} onChange={handleChange} autoFocus />

		<div className="view" dangerouslySetInnerHTML={getMarkup()} />
	</div>
);

export default MarkdowEditor;
