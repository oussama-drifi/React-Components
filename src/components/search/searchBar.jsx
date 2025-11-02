import { useState } from 'react'
import './searchBar.css'

const SearchBar = ({optionsShown, setOptionsShown, searchQuery, setSearchQuery}) => {

    const handleChange = (e) => {
        const query = e.target.value;
        setOptionsShown(query.trim());
        setSearchQuery(query);
    }

    const clearInput = () => {
        setSearchQuery("");
        setOptionsShown(false);
    }

    return (
        <div className="search-input">
            <button type='button'><i className="bi bi-search"></i></button>
            <label htmlFor="search-item"></label>
            <input 
                id='search-item'
                type="text" 
                placeholder="Search" 
                value={searchQuery} 
                onChange={handleChange} 
            />
            {/* conditionnaly render the clear button */}
            {
                searchQuery.length > 0 && (<button type='button' onClick={clearInput}><i className="bi bi-x-lg"></i></button>)
            }
        </div>
    )
}

export default SearchBar