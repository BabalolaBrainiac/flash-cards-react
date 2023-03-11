import { library } from '@fortawesome/fontawesome-svg-core'
import { faDice, faDumbbell, faFileAlt, faFont } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

library.add(faDumbbell)
library.add(faFont)
library.add(faDice)
library.add(faFileAlt)

export default function QuizType(props) {
		return (
			 <li className='col-sm-3 text-center'>
						<div className='nav-card'>
											<FontAwesomeIcon icon={props.icon} size='4x' />
						<span>{props.quizType}</span>
						</div>
				</li>
		)
}