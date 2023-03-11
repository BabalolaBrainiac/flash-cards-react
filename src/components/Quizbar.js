import React from 'react'
import QuizType from './QuizType'


export default function QuizBar(props) {
    
    return (
        <div className='quizBar'>
            <h1>Choose your study type</h1>
            <ul className='nav nav-pills nav-fill'>
                <QuizType icon="dice" quizType="Random" />
                <QuizType icon="file-alt" quizType="Regular" />
                <QuizType icon="dumbbell" quizType="Weighted" />
                <QuizType icon="font" quizType="Multi" />
           </ul>
        </div>
    )
}