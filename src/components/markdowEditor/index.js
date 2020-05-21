import React from 'react';
import Header from '../header';

import './style.css';

const MarkdowEditor = ({
	value,
	handleChange,
	getMarkup,
	isSaving,
	handleRemove,
}) => (
	<section>
		<Header isSaving={isSaving} handleRemove={handleRemove} />
		<div className="container">
			<textarea value={value} onChange={handleChange} autoFocus />

			<div className="view" dangerouslySetInnerHTML={getMarkup()} />
		</div>
	</section>
);

export default MarkdowEditor;
