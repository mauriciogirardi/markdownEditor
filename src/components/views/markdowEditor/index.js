import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header';

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

MarkdowEditor.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	getMarkup: PropTypes.func.isRequired,
	textareaRef: PropTypes.func.isRequired,
};

export default MarkdowEditor;
