import React from 'react'

function Track(props) {
    return (
        <div className='Track'>
            <div className='track-container'>
                <img alt='album art' src={props.art}/>
                <h2>{props.title}</h2>
            </div>
            <h4>{props.artist}</h4>
            <p>{props.album}</p>
        </div>
    )
}

export default Track