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
		this.state = { value: '' };

		this.handleChange = e => {
			this.setState({
				value: e.target.value,
			});
		};

		this.getMakup = () => {
			return { __html: marked(this.state.value) };
		};

		this.handleSave = () => {
			localStorage.setItem('md', this.state.value);
		};
	}

	componentDidMount() {
		const value = localStorage.getItem('md');
		this.setState({ value });
	}

	render() {
		return (
			<MarkdowEditor
				value={this.state.value}
				handleChange={this.handleChange}
				getMarkup={this.getMakup}
				handleSave={this.handleSave}
			/>
		);
	}
}

export default App;
