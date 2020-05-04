import React, { Component } from 'react';
import MarkdowEditor from './components/markdowEditor';
import marked from 'marked';
import hljs from 'highlight.js';

import 'highlight.js/styles/dracula.css';

marked.setOptions({
	highlight: code => {
		return hljs.highlightAuto(code).value;
	},
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
	}

	render() {
		return (
			<MarkdowEditor
				value={this.state.value}
				handleChange={this.handleChange}
				getMarkup={this.getMakup}
			/>
		);
	}
}

export default App;
