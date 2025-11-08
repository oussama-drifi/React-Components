import { useRef, useState } from 'react'
import './searchBar.css'

const SearchBar = ({input, setInput, setOptionsShown, searchQuery, setSearchQuery}) => {

    const timerRef = useRef(null);

    const handleChange = (e) => {
        const query = e.target.value;
        setOptionsShown(query.trim().length > 0);
        setInput(query);
        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            setSearchQuery(query);
            console.log("search done!");
        }, 300);
    }

    const clearInput = () => {
        setSearchQuery("");
        setInput("");
        setOptionsShown(false);
        clearTimeout(timerRef.current);
    }

    return (
        <div className="search-input">
            <button type='button'><i className="bi bi-search"></i></button>
            <label htmlFor="search-item"></label>
            <input 
                id='search-item'
                type="text" 
                placeholder="Search" 
                value={input}
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