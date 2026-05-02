import '@fontsource/poppins';
import "bootstrap-icons/font/bootstrap-icons.css";
// components
import Accordion from './components/accordion/accordion'
import PasswordStrengthChecker from './components/passwordStrengthChecker/passwordStrengthChecker'
import Search from './components/search/search'
import SelectMenu from './components/selectMenu/selectMenu';

function App() {

    const questions = [
        {
            question: "Are you working on some project?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt culpa sunt excepturi voluptatibus vitae quod quas reprehenderit porro minima eos odit quo tenetur cupiditate."
        }, {
            question: "What programming languages do you like?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima perferendis, iste molestias ea corrupti provident minus aut est dignissimos ad. Magnam architecto ullam aliquam quidem."
        }, {
            question: "For how long have you been coding?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat quos odio, eveniet nostrum harum illo, mollitia blanditiis dolores possimus magnam minus necessitatibus. Rerum et quia corporis nemo alias corrupti."
        }
    ]

    const options = ["Casablanca-Settat", "Rabat-Salé", "Tanger-Tétouan", "Laayoune-Boujdour", "Sous-Massa"];

    return (
        <div className='components-wrapper'>
            <Accordion questions={questions} />
            <PasswordStrengthChecker />
            <Search />
            <SelectMenu options={options} />
        </div>
    )
}

export default App
