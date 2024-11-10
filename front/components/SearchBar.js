import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');

    const toggleSearchBar = () => {
        setIsOpen(!isOpen);
    };

    const closeSearchBar = () => {
        console.log('reaching')
        setIsOpen(false);
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <>
            <FaSearch onClick={toggleSearchBar} className="search-btn" />

            {isOpen && (
                <>
                    <div className="overlay" onClick={closeSearchBar}></div>
                    <button className="close-btn" onClick={closeSearchBar}>X</button>
                    <div className="search-bar">
                        <input
                            type="text"
                            value={query}
                            onChange={handleInputChange}
                            placeholder="Search..."
                            autoFocus
                        />
                    </div>
                </>
            )}
        </>
    );
};

export default SearchBar;
