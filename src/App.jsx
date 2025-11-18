import '@fontsource/poppins';
import "bootstrap-icons/font/bootstrap-icons.css";

import Accordion from './components/accordion/accordion'
import PasswordStrengthChecker from './components/passwordStrengthChecker/passwordStrengthChecker'
import Search from './components/search/search'
import Carousel from './components/logoCarousel/carousel';
import SelectMenu from './components/selectMenu/selectMenu';

function App() {

    const questions = [
        {
        question: "are you working on a some project ?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt culpa sunt excepturi voluptatibus vitae quod quas reprehenderit porro minima eos odit quo tenetur cupiditate."
        }, {
        question: "what programming languages do you like ?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima perferendis, iste molestias ea corrupti provident minus aut est dignissimos ad. Magnam architecto ullam aliquam quidem."
        }, {
        question: "for how long have you been coding ?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat quos odio, eveniet nostrum harum illo, mollitia blanditiis dolores possimus magnam minus necessitatibus. Rerum et quia corporis nemo alias corrupti."
        }
    ]

    const options = ["Casablanca-Settat", "Rabat-Salé", "Tanger-Tétouan", "Laayoune-Boujdour", "Sous-Massa"];

    return (
        <>
            {/* <Accordion questions={questions}/>
            <PasswordStrengthChecker />
            <Search />
            <Carousel /> */}
            <SelectMenu options={options}/>
        </>
    )
}

export default App
