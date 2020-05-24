import React from 'react';
import Button from '../button';
import SaveMessage from '../saveMessage';

import { RiDeleteBinLine } from 'react-icons/ri';
import { MdExpandMore } from 'react-icons/md';

import './style.css';

export default ({ isSaving, handleRemove, handleCreate }) => (
	<header className={'editor__header'}>
		<Button onClick={handleCreate} kind="create">
			Criar novo <MdExpandMore className="icon_cre" />
		</Button>

		<Button onClick={handleRemove} kind="del">
			Remover <RiDeleteBinLine className="icon_del" />
		</Button>

		<SaveMessage isSaving={isSaving} />
	</header>
);
