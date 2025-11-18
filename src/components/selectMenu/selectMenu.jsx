import { useState } from 'react'
import './selectMenu.css'

const SelectMenu = ({options}) => {
    const [isShown, setIsShown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    
    const handleChange = (option) => {
        setSelectedOption(option);
        setIsShown(false);
    }
    return (
        <div className="select-wrapper">
            <input type="hidden" value="" id="selected-option" />
            <div className="selected-option">
                <span className="selected">{selectedOption}</span> <span><i className="bi bi-chevron-down"></i></span>
            </div>
            <ul className={`options ${isShown ? "options-shown" : ""}`}>
                {
                    options.map(option => (
                        <li key={option}
                            onClick={() => handleChange(option)}
                        >{option}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SelectMenu