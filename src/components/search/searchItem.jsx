import './searchItem.css'

const SearchItem = ({name}) => {
    return (
        <div className="search-item">
            <div className="country-name">
                <span>{name}</span>
            </div>
        </div>
    )
}

export default SearchItem