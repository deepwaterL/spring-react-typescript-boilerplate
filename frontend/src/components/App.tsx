import React from 'react';

import '../styles/index.css';

export interface IAppProps {}

export interface IAppState {
	response: string
}

class App extends React.PureComponent<IAppProps, IAppState> {

	constructor(props: IAppProps) {
		super(props);
		this.state = {response: 'Loading'};
	}

	componentDidMount(): void {
		fetch('api/hello')
			.then(response => response.text())
			.then(text => {
				this.setState({response: text});
			});
	}

	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<p>{this.state.response}</p>
			</div>
		);
	}
}

export default App;