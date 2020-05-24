import React from 'react';
import { FcRefresh, FcCheckmark } from 'react-icons/fc';

const Saving = () => (
	<p>
		Salvando <FcRefresh />
	</p>
);

const Save = () => (
	<p>
		Salvo <FcCheckmark />
	</p>
);

const SaveMessage = ({ isSaving }) =>
	isSaving !== null && <>{isSaving ? Saving() : Save()}</>;

export default SaveMessage;
