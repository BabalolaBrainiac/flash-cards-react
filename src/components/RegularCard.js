import React from "react";

export default function RegularCard(props) {
	console.log(props.questionData);
	const questionRes = props.questionData;

	return (
		<>
			<div className="card-back">{questionRes.service}</div>
			<div className="card-front">
				<div>{questionRes.desc}</div>
				<div>{questionRes.cat}</div>
			</div>
		</>
	);
}
