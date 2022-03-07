import React from 'react';

function Search() {
    const [term, setTerm] = React.useState('');
    const handleChange = (e) => {
        setTerm(e.target.value);
    }
    return (
        <>
            <h2>Search movies</h2>
            <label htmlFor='search'>Search: </label>
            <input id='search' type="text" onChange={handleChange} />
            <p>
                Search for <strong>{term}</strong>
            </p>
        </>
    );
}

export default Search;
