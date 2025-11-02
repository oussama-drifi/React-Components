import { useState } from "react";
import SearchBar from "./searchBar";
import SearchResults from './searchResults'

const Search = () => {
    const styles = {
        position: "relative"
    }
    
    const [searchQuery, setSearchQuery] = useState("");
    const [optionsShown, setOptionsShown] = useState(false);

    return (
        <main style={styles}>
            <SearchBar optionsShown={optionsShown} setOptionsShown={setOptionsShown} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <SearchResults optionsShown={optionsShown} setOptionsShown={setOptionsShown} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </main>
    )
}

export default Search