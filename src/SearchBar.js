import React, { useState, useEffect } from 'react'
import response from './dummyData'
import Results from './Results'

function SearchBar() {
    return (
        <div>
            <div className='searchBar'>
                <form>
                    <input placeholder='Find a track'/>
                    <button type='submit'>Search</button>
                </form>
            </div>
            <Results response={response} />
        </div>
    )
}

export default SearchBar