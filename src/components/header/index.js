import React from 'react';
import { FcRefresh, FcCheckmark } from 'react-icons/fc';
import { RiDeleteBinLine } from 'react-icons/ri';

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

export default ({ isSaving, handleRemove }) => (
	<header className={'editor__header'}>
		<button className="del" onClick={handleRemove}>
			Remover <RiDeleteBinLine className="icon_del" />
		</button>

		{isSaving ? Saving() : Save()}
	</header>
);
