import { Component } from "react";
import "./App.css";
import Flashcards from "./components/Flashcards";
import QuizBar from "./components/Quizbar";
class App extends Component {
	constructor() {
		super();

		this.state = {
			cardStyle: "Random",
		};
	}
	userChoice = (cardStyle) => {
		this.setState({
			cardStyle: cardStyle,
		});
	};

	render() {
		console.log(this.state.cardStyle);
		return (
			<div className="App align-items-center d-flex">
				<div className="container">
					<QuizBar userChoice={this.userChoice} />
					<Flashcards cardStyle={this.state.cardStyle} />
				</div>
			</div>
		);
	}
}

export default App;
