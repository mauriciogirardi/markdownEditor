import React from 'react';
import Header from '../header';

import './style.css';

const MarkdowEditor = ({
	value,
	handleChange,
	getMarkup,
	textareaRef,
	...props
}) => (
	<section>
		<Header {...props} />
		<div className="container">
			<textarea
				value={value}
				onChange={handleChange}
				autoFocus
				ref={textareaRef}
			/>

			<div className="view" dangerouslySetInnerHTML={getMarkup()} />
		</div>
	</section>
);

export default MarkdowEditor;
