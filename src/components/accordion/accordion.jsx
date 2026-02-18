import Question from './question'
import './style.css'
const Accordion = ({questions}) => {

    return (
        <div className="accordion-container component">
            {
                questions.map((obj, index) => (
                    <Question 
                        question = {obj.question}
                        answer = {obj.answer}
                        key = {index}
                    />
                ))
            }
        </div>
    )

}

export default Accordion