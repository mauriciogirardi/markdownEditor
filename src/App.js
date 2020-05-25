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
			title: '',
			id: v4(),
		});

		this.state = {
			...this.clearState(),
			isSaving: null,
			title: '',
			files: {},
		};

		this.handleChange = field => e => {
			this.setState({
				[field]: e.target.value,
				isSaving: true,
			});
		};

		this.getMakup = () => {
			return { __html: marked(this.state.value) };
		};

		this.handleSave = () => {
			if (this.state.isSaving) {
				const files = {
					...this.state.files,
					[this.state.id]: {
						title: this.state.title || 'sem título',
						content: this.state.value,
					},
				};

				localStorage.setItem('markdown-editor', JSON.stringify(files));

				this.setState({
					isSaving: false,
					files,
				});
			}
		};

		this.createNew = () => {
			this.setState(this.clearState());
			this.textarea.focus();
		};

		this.handleRemove = () => {
			const { [this.state.id]: id, ...files } = this.state.files;

			localStorage.setItem('markdown-editor', JSON.stringify(files));
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
				title: this.state.files[fileId].title,
				value: this.state.files[fileId].content,
				id: fileId,
			});
		};
	}

	componentDidMount() {
		const files = JSON.parse(localStorage.getItem('markdown-editor'));
		this.setState({ files });
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
				title={this.state.title}
			/>
		);
	}
}

export default App;
