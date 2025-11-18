import './selectMenu.css'

const SelectMenu = ({options}) => {
    return (
        <div className="select-wrapper">
            <input type="hidden" value="" id="selected-option" />
            <div className="selected-option">
                <span className="selected">{options[0]}</span> <span><i className="bi bi-chevron-down"></i></span>
            </div>
            <ul className="options">
                {
                    options.map(option => (<li key={option}>{option}</li>))
                }
            </ul>
        </div>
    )
}

export default SelectMenu