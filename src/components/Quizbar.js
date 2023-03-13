import React from "react";
import QuizType from "./QuizType";

export default function QuizBar(props) {
	const arrayOptions = [
		{ icon: "dice", quizType: "Random" },
		{ icon: "file-alt", quizType: "Regular" },
		{ icon: "dumbbell", quizType: "Weighted" },
		{ icon: "font", quizType: "Multi" },
	];

	const QuizTypeComponent = arrayOptions.map((qt, i) => {
		return (
			<QuizType
				key={i}
				icon={qt.icon}
				quizType={qt.quizType}
				userChoice={props.userChoice}
			/>
		);
	});

	return (
		<div className="quizBar">
			<h1>Choose your study type</h1>
			<ul className="nav nav-pills nav-fill">{QuizTypeComponent}</ul>
		</div>
	);
}
