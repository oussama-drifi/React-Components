import { useMemo, useState } from 'react';
import {SearchItem, searchItemSkeleton } from './searchItem';
import { countries } from './countries'
import './searchResults.css';

const SearchResults = ({input, setInput, optionsShown, setOptionsShown, searchQuery, setSearchQuery}) => {

    const filteredCountries = useMemo(() => {
        return countries.filter(country => country.toLowerCase().startsWith(searchQuery.toLowerCase()))
    }, [searchQuery])

    const handleSelect = (country) => {
        setInput(country);
        setOptionsShown(false);
    }

    return (
        <>
            {
                optionsShown && (
                    <div className="options">
                        {/* <div className="loader"><i className="bi bi-arrow-repeat"></i></div> */}
                        <div className="results">
                            {
                                filteredCountries.map((country) => <SearchItem key={country} name={country} onclick={() => handleSelect(country)}/>)
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default SearchResults