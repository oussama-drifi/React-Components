import './searchItem.css'


const searchItemSkeleton = () => {
    return (
        <div className="search-item-skeleton">
            <div></div>
        </div>
    )
}



const SearchItem = ({name, onclick}) => {
    return (
        <div className="search-item" onClick={onclick}>
            <div className="country-name">
                <span>{name}</span>
            </div>
        </div>
    )
}

export {SearchItem, searchItemSkeleton}