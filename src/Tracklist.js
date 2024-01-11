import React, { useState } from 'react'

function Tracklist(props) {
    return (
        <div className='Tracklist'>
            <ul>
                {props.tracks.map((item) => (
                    <li key={item.uri}>
                        {item.track}
                        <button onClick={() => props.onClick(item)} id={item.uri}> + </button>
                    </li>
                ))}   
            </ul>
        </div>
    )
}

export default Tracklist