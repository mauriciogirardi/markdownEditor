import React from 'react';
import Button from '../button';

import { FcRefresh, FcCheckmark } from 'react-icons/fc';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdExpandMore } from 'react-icons/md';

import './style.css';

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

export default ({ isSaving, handleRemove, handleCreate }) => (
	<header className={'editor__header'}>
		<Button onClick={handleCreate} kind="create">
			Criar novo <MdExpandMore className="icon_cre" />
		</Button>

		<Button onClick={handleRemove} kind="del">
			Remover <RiDeleteBinLine className="icon_del" />
		</Button>

		{isSaving !== null && <>{isSaving ? Saving() : Save()}</>}
	</header>
);
