import './searchItem.css'


const searchItemSkeleton = () => {
    return (
        <div className="search-item-skeleton">
            <div></div>
        </div>
    )
}



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