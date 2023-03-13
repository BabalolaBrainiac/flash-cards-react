import React from "react";

export default function RandomWeighted(props) {
	const question = props.questionData;
	return (
		<>
			<div className="card-back">
				<div>{question.service}</div>
				<div className="commonality">{question.common}</div>
			</div>
			<div className="card-front">
				<div>{question.cat}</div>
			</div>
		</>
	);
}
