import React, { useState, useEffect } from 'react'
import response from './dummyData'
import Results from './Results'

function SearchBar() {
    const [search, setSearch] = useState("")

    function handleChange(e) {
        setSearch(e.target.value)
    }

    return (
        <div>
            <div className='searchBar'>
                <form>
                    <input onChange={handleChange} value={search} placeholder='Find a track'/>
                    <button type='submit'>Search</button>
                </form>
            </div>
            <Results response={response} />
        </div>
    )
}

export default SearchBar