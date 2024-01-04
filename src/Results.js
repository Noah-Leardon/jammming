import React, { useState, useEffect } from 'react'
import Track from './Track'
import response from './dummyData'

function Results() {
    const results = []
    const populateResults = () => {
        for (let i = 0; i < response.tracks.items.length; i++) {
            results.push(<li><Track title={response.tracks.items[i].name} artist={response.tracks.items[i].artists[0].name} album={response.tracks.items[i].album.name} /></li>)
        }
        return results
    }
    return (
            <div className='results'>
                <ul>
                    {populateResults()}
                </ul>
            </div>
    )
}

export default Results