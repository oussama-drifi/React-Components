import { useState } from 'react';
import SearchItem from './searchItem';
import './searchResults.css'

const SearchResults = ({optionsShown, setOptionsShown, searchQuery, setSearchQuery}) => {

    // searchQuery is a state that is coming from the parent component

    const [countries, setCountries] = useState([
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    ]); // more countries...

    const filteredCountries = countries.filter(country => {
        return country.startsWith(searchQuery)
    })

    console.log(searchQuery)

    return (
        <>
            {
                optionsShown && (
                    <div className="options">
                        {/* <div className="loader"><i className="bi bi-arrow-repeat"></i></div> */}
                        <div className="results">
                            {
                                filteredCountries.map((country) => <SearchItem key={country} name={country}/>)
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default SearchResults