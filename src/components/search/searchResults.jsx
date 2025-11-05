import { useEffect, useState } from 'react';
import {SearchItem, searchItemSkeleton } from './searchItem';
import { countries } from './countries'
import './searchResults.css';

const SearchResults = ({optionsShown, searchQuery}) => {

    return (
        <>
            {
                optionsShown && (
                    <div className="options">
                        {/* <div className="loader"><i className="bi bi-arrow-repeat"></i></div> */}
                        <div className="results">
                            {
                                countries.filter(country => country.toLowerCase().startsWith(searchQuery.toLowerCase())).map((country) => <SearchItem key={country} name={country}/>)
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default SearchResults