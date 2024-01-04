import React, { useState, useEffect } from 'react'
import Tracklist from './Tracklist'

function Playlist() {
    return (
        <div className='playlist'>
            <form> 
                <input placeholder='Playlist name' />
                <button type='submit'>Add Playlist</button>
            </form>
            <Tracklist />
        </div>
    )
}

export default Playlist