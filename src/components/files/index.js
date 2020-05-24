import React, { useState } from 'react';
import Modal from 'react-modal';

import { GoFileSubmodule } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';

import './style.css';

Modal.setAppElement('#root');

const Files = ({ files, handleOpenFile }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<div className="container-files">
			<button onClick={() => setModalIsOpen(true)} className="btn-modal">
				Files <GoFileSubmodule className="icon-file" />
			</button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				style={{
					content: {
						top: 50,
						left: 50,
						right: 50,
						bottom: 50,
					},
				}}
			>
				<h2>Files</h2>

				<ul>
					{Object.keys(files).map(fileId => (
						<li key={fileId}>
							<button
								className="btn-files"
								onClick={() => {
									if (!handleOpenFile(fileId)) setModalIsOpen(false);
								}}
							>
								{fileId}
							</button>
						</li>
					))}
				</ul>

				<button onClick={() => setModalIsOpen(false)} className="modal-close">
					<GrClose />
				</button>
			</Modal>
		</div>
	);
};

export default Files;
