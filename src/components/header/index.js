import React from 'react';

import './style.css';

export default ({ onSave }) => (
	<header className={'editor__header'}>
		<button onClick={onSave}>Salvar</button>
	</header>
);
