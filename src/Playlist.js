import React, { useState, useEffect } from 'react'
import Tracklist from './Tracklist'

function Playlist(props) {
    const results = []

    const populateResults = () => {
        console.log('Added Songs:', props.addedSongs);
        return props.addedSongs.map((tracks, index) => (
          <li key={index}>
            {tracks.track}
            <button>-</button>
          </li>
        ));
      };
      

    return (
        <div className='playlist'>
            <form> 
                <input placeholder='Playlist name' />
                <button type='submit'>Add Playlist</button>
            </form>
            <ul>
                {populateResults()}
            </ul>
        </div>
    )
}

export default Playlist