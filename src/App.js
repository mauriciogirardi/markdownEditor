import React, { Component } from 'react';
import MarkdowEditor from './components/markdowEditor';
import marked from 'marked';

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
		this.state = { value: '', isSaving: false };

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
				localStorage.setItem('md', this.state.value);

				this.setState({ isSaving: false });
			}
		};

		this.handleRemove = () => {
			localStorage.removeItem('md');
			this.setState({ value: '' });
		};
	}

	componentDidMount() {
		const value = localStorage.getItem('md');
		this.setState({ value: value || '' });
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
			/>
		);
	}
}

export default App;
