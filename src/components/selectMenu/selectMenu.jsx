import { useEffect, useRef, useState } from 'react'
import './selectMenu.css'

const SelectMenu = ({options}) => {
    const [isShown, setIsShown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]); // throws error in case of empty options array
    const [focusedIndex, setFocusedIndex] = useState(-1);

    // toggle options menu
    const handleChange = (option) => {
        setSelectedOption(option);
        setIsShown(prev => !prev);
        buttonRef.current?.focus();
    }

    // Keyboard navigation
    const handleKeyDown = (e) => {
        if (!isShown) {
        if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsShown(true);
            setFocusedIndex(0);
        }
        return;
        }


        if (e.key === "Escape") setIsShown(false);

        e.preventDefault();
        if (e.key === "ArrowDown") setFocusedIndex(i => Math.min(i + 1, options.length - 1));

        if (e.key === "ArrowUp") setFocusedIndex(i => Math.max(i - 1, 0));

        if (e.key === "Enter") setSelectedOption(options[focusedIndex]);
    };

    // DOM elements
    const wrapperRef = useRef(null);
    const buttonRef = useRef(null);
    const optionsRef = useRef(null);
    
    // attach event to document in case of out-ou-menu click
    useEffect(() => {
        const closeMenuOnOuterClick = (e) => {
            if(buttonRef.current && !buttonRef.current.contains(e.target)){
                setIsShown(false);
            }
        }
        document.addEventListener('click', closeMenuOnOuterClick)
        return () => {
            document.removeEventListener('click', closeMenuOnOuterClick)
        }
    }, [])

    useEffect(() => {
        if (isShown && focusedIndex >= 0) {
        const el = optionsRef.current?.children[focusedIndex];
        el?.focus();
        }
    }, [focusedIndex, isShown]);

    return (
        <div className="select-wrapper" ref={wrapperRef}>
            <input 
                type="hidden" 
                value={selectedOption}
            />
            <div 
                className="selected-option" 
                onClick={() => setIsShown(prev => !prev)} 
                onKeyDown={handleKeyDown}
                ref={buttonRef}
                tabIndex={0}
                role="combobox"
                aria-expanded={isShown}
                aria-haspopup="listbox"
                aria-controls="select-list"
                // aria-activedescendant={
                // isShown && focusedIndex >= 0
                //     ? `option-${focusedIndex}`
                //     : undefined
                // }
            >
                <span className="selected">{selectedOption}</span> <span className={isShown ? "rotate" : ""}><i className={`bi bi-chevron-down`}></i></span>
            </div>
            <ul 
                className={`options ${isShown ? "options-shown" : ""}`} 
                ref={optionsRef}
                id="select-list"
                role="listbox"
                tabIndex={-1}
            >
                {
                    options.map((option, index) => (
                        <li key={option}
                            onClick={() => handleChange(option)}
                            id={`option-${index}`}
                            role="option"
                            tabIndex={-1}
                            aria-selected={selectedOption === option}
                            onMouseEnter={() => setFocusedIndex(index)}
                        >{option}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SelectMenu