/** @jsx h */
const { h } = preact;

class Root extends preact.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
	}

	render() {
		return null;
	}
}

preact.render(<Root></Root>, document.getElementById('root'));