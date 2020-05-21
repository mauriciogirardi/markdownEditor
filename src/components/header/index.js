import React from 'react';
import { FcRefresh, FcCheckmark } from 'react-icons/fc';

import './style.css';

const Saving = () => (
	<>
		<p>
			Salvando <FcRefresh />
		</p>
	</>
);

const Save = () => (
	<>
		<p>
			Salvo <FcCheckmark />
		</p>
	</>
);

export default ({ isSaving }) => (
	<header className={'editor__header'}>{isSaving ? Saving() : Save()}</header>
);
