import axios from "axios";
import React, { Component } from "react";
import RegularCard from "./RegularCard";

class Flashcards extends Component {
	constructor() {
		super();
		this.apiHost = `https://aws-services.robertbunch.dev/services`;
		this.state = {
			flipClass: "",
			questionData: "",
		};
	}

	componentDidMount() {
		this.newCard();
	}

	newCard = () => {
		let path;
		console.log(this.props.cardStyle);
		const cardStyle = this.props.cardStyle;

		if (cardStyle === "Regular" || cardStyle === "Random") {
			path = this.apiHost + "/all";
		} else if (cardStyle === "Weighted") {
			path = this.apiHost + "/weighted";
		} else {
			path = this.apiHost + "/multi";
		}

		axios
			.get(path)
			.then((res) => {
				this.setState({
					questionData: res.data,
				});
			})
			.catch((err) => {
				return err;
			});
	};

	handleFlip = (e) => {
		const newFlip = this.state.flipClass === "" ? "flip" : "";
		this.setState({
			flipClass: newFlip,
		});
	};

	render() {
		return (
			<div>
				<div className="row align-items-center card-holder">
					<div
						onClick={this.handleFlip}
						className={`col-sm-3 offset-sm-3 card mb-3 ${this.state.flipClass}`}>
						<RegularCard questionData={this.state.questionData} />
					</div>
				</div>
				<button onClick={this.newCard} className="btn btn-primary btn-lg">
					Next Question
				</button>
			</div>
		);
	}
}

export default Flashcards;
