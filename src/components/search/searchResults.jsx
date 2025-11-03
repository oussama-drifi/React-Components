import { useEffect, useState } from 'react';
import SearchItem from './searchItem';
import './searchResults.css';

const SearchResults = ({optionsShown, searchQuery}) => {

    // searchQuery is a state that is coming from the parent component

    const [countries, setCountries] = useState([
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    ]); // more countries...

    // let filteredCountries;

    // useEffect(() => {
    //     // console.log("saerch query is ",searchQuery);
    //     filteredCountries = countries.filter(country => country.toLowerCase().startsWith(searchQuery.toLowerCase()));
    // }, [searchQuery]);

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