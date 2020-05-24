import React, { Component } from 'react';
import { v4 } from 'node-uuid';
import marked from 'marked';
import MarkdowEditor from './components/views/markdowEditor';

import('highlight.js').then(hljs => {
	marked.setOptions({
		highlight: (code, lang) => {
			if (lang && hljs.getLanguage(lang)) {
				return hljs.highlight(lang, code).value;
			}
			return hljs.highlightAuto(code).value;
		},
	});
});

class App extends Component {
	constructor() {
		super();

		this.clearState = () => ({
			value: '',
			id: v4(),
		});

		this.state = {
			...this.clearState(),
			isSaving: null,
			files: {},
		};

		this.handleChange = e => {
			this.setState({
				value: e.target.value,
				isSaving: true,
			});
		};

		this.getMakup = () => {
			return { __html: marked(this.state.value) };
		};

		this.handleSave = () => {
			if (this.state.isSaving) {
				localStorage.setItem(this.state.id, this.state.value);

				this.setState({
					isSaving: false,
					files: {
						...this.state.files,
						[this.state.id]: this.state.value,
					},
				});
			}
		};

		this.createNew = () => {
			this.setState(this.clearState());
			this.textarea.focus();
		};

		this.handleRemove = () => {
			localStorage.removeItem(this.state.id);

			const { [this.state.id]: id, ...files } = this.state.files;
			this.setState({ files });

			this.createNew();
		};

		this.handleCreate = () => {
			this.createNew();
		};

		this.textareaRef = node => {
			this.textarea = node;
		};

		this.handleOpenFile = fileId => {
			this.setState({
				value: this.state.files[fileId],
				id: fileId,
			});
		};
	}

	componentDidMount() {
		const files = Object.keys(localStorage);
		this.setState({
			files: files.reduce(
				(acc, fileId) => ({
					...acc,
					[fileId]: localStorage.getItem(fileId),
				}),
				{}
			),
		});
	}

	componentDidUpdate() {
		clearInterval(this.timer);
		this.timer = setTimeout(this.handleSave, 300);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<MarkdowEditor
				value={this.state.value}
				isSaving={this.state.isSaving}
				handleChange={this.handleChange}
				getMarkup={this.getMakup}
				handleRemove={this.handleRemove}
				handleCreate={this.handleCreate}
				textareaRef={this.textareaRef}
				files={this.state.files}
				handleOpenFile={this.handleOpenFile}
			/>
		);
	}
}

export default App;
