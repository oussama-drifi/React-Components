const SelectMenu = ({options}) => {
    return (
        <div className="select-wrapper">
            <input type="hidden" value="" id="" />
            <div class="selected-option">
                <span class="selected">{options[0]}</span> <span><i className="bi bi-chevron-down"></i></span>
            </div>
            <ul class="options">
                {
                    options.map(option => (<li key={option}>{option}</li>))
                }
            </ul>
        </div>
    )
}

export default SelectMenu