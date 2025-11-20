import { useEffect, useRef, useState } from 'react'
import './selectMenu.css'

const SelectMenu = ({options}) => {
    const [isShown, setIsShown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = (option) => {
        setSelectedOption(option);
        setIsShown(prev => !prev);
    }

    const selectedOptionRef = useRef(null);
    
    useEffect(() => {
        const closeMenuOnOuterClick = (e) => {
            if(!selectedOptionRef.current.contains(e.target)){
                setIsShown(false);
            }
        }
        document.addEventListener('click', closeMenuOnOuterClick)
        return () => {
            document.removeEventListener('click', closeMenuOnOuterClick)
        }
    }, [])

    return (
        <div className="select-wrapper">
            <input 
                type="hidden" 
                value={selectedOption}
                id="selected-option"/>
            <div className="selected-option" onClick={() => handleChange(selectedOption)} ref={selectedOptionRef}>
                <span className="selected">{selectedOption}</span> <span className={isShown ? "rotate" : ""}><i className={`bi bi-chevron-down`}></i></span>
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