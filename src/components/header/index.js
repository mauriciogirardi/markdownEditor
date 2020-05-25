import React from 'react';
import Button from '../button';
import Files from '../files';

import SaveMessage from '../saveMessage';
import PropTypes from 'prop-types';

import { RiDeleteBinLine } from 'react-icons/ri';
import { MdExpandMore } from 'react-icons/md';

import './style.css';

const Header = ({
	isSaving,
	handleRemove,
	handleCreate,
	handleChange,
	title,
	files,
	handleOpenFile,
}) => (
	<header className={'editor__header'}>
		<input
			className="inp_title"
			type="text"
			value={title}
			onChange={handleChange('title')}
			placeholder="sem título"
		/>

		<Files files={files} handleOpenFile={handleOpenFile} />

		<Button onClick={handleCreate} kind="create">
			Criar novo <MdExpandMore className="icon_cre" />
		</Button>

		<Button onClick={handleRemove} kind="del">
			Remover <RiDeleteBinLine className="icon_del" />
		</Button>

		<SaveMessage isSaving={isSaving} />
	</header>
);

Header.propTypes = {
	handleCreate: PropTypes.func.isRequired,
	handleRemove: PropTypes.func.isRequired,
	title: PropTypes.string,
};

export default Header;
