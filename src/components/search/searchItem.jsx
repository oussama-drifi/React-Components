import './searchItem.css'

const SearchItem = ({name, onclick}) => {
    return (
        <div className="search-item" onClick={onclick}>
            <div className="country-name">
                <span>{name}</span>
            </div>
        </div>
    )
}

export default SearchItem
