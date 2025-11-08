import { useState } from "react";
import SearchBar from "./searchBar";
import SearchResults from './searchResults'

const Search = () => {

    const styles = { position: "relative" }
    
    const [searchQuery, setSearchQuery] = useState("");
    const [optionsShown, setOptionsShown] = useState(false);
    const [input, setInput] = useState("");

    return (
        <main style={styles}>
            <SearchBar input={input} setInput={setInput} optionsShown={optionsShown} setOptionsShown={setOptionsShown} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <SearchResults input={input} setInput={setInput} optionsShown={optionsShown} setOptionsShown={setOptionsShown} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </main>
    )
}

export default Search