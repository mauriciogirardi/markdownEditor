import React from 'react';

import './style.css';

const MarkdowEditor = ({ value, handleChange, getMarkup }) => {
	return (
		<div className="container">
			<div className="form">
				<textarea value={value} onChange={handleChange} autoFocus />
			</div>
			<div className="view" dangerouslySetInnerHTML={getMarkup()} />
		</div>
	);
};

// MarkdowEditor.propTypes = {
// 	value: PropTypes.string.isRequired,
// 	handleChange: PropTypes.func.isRequired,
// };

export default MarkdowEditor;
