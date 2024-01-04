import React, { useState, useEffect } from 'react'

function Track(props) {
    return (
        <div className='Track'>
            <h2>{props.title}</h2>
            <h4>{props.artist}</h4>
            <p>{props.album}</p>
        </div>
    )
}

export default Track