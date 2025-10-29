import { useState } from "react"


const Question = ({question, answer}) => {
    const [isAnswerShown, showAnswer] = useState(false)

    return (
        <div className="question-container">
            <div 
                className={`question ${isAnswerShown ? "active" : ""}`}
                onClick={() => showAnswer(prev => !prev)}
            >
                <p>{question}</p> <span><i className="bi bi-chevron-down"></i></span>
            </div>
            <div className={`answer ${isAnswerShown ? "show" : ""}`}>
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default Question