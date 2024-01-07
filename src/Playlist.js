import React, { useState, useEffect } from 'react'

function Playlist(props) {
    function onClick(e) {
        props.setPlaylistSongs((prev) => {
            return prev.filter((item) => item.id !== e.id)
        })
    }

    return (
        <div className='playlist'>
            <form> 
                <input placeholder='Playlist name' />
                <button type='submit'>Add Playlist</button>
            </form>
            <ul>
                {props.playlistSongs.map((item) => (
                    <li key={item.id}>
                        {item.track}
                        <button onClick={() => onClick(item)} id={item.id}>-</button>
                    </li>
                ))}   
            </ul>
        </div>
    )
}

export default Playlist