import logo from "./logo.svg";
import "./App.css";

import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { RequestSupport } from "./components/requestSupport";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<div className="container">
				<Hero></Hero>
				<RequestSupport></RequestSupport>
			</div>
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
		</div>
	);
}

export default App;
