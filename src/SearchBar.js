import React, { useState, useEffect } from 'react'

function SearchBar() {
    return (
        <>
            <form>
                <input placeholder='Find a track'/>
                <button type='submit'>Search</button>
            </form>
        </>
    )
}

export default SearchBar