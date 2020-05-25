import React from 'react';
import PropTypes from 'prop-types';

import { FcRefresh, FcCheckmark } from 'react-icons/fc';

import './style.css';

const Saving = () => (
	<p className="cont-p">
		Salvando <FcRefresh />
	</p>
);

const Save = () => (
	<p className="cont-p">
		Salvo <FcCheckmark />
	</p>
);

const SaveMessage = ({ isSaving }) =>
	isSaving !== null && <>{isSaving ? Saving() : Save()}</>;

SaveMessage.propTypes = {
	isSaving: PropTypes.bool,
};

export default SaveMessage;
