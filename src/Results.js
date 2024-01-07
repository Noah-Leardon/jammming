import React, { useState, useEffect } from 'react'
import Track from './Track'
import Tracklist from './Tracklist'
import Playlist from './Playlist'

function Results(props) {
    const [playlistSongs, setPlaylistSongs] = useState([])

    const response = props.response
    const results = []

    const populateResults = () => {
        for (let i = 0; i < response.tracks.items.length; i++) {
            results.push({
                id: i,
                track: <Track
                    title={response.tracks.items[i].name}
                    artist={response.tracks.items[i].artists[0].name}
                    album={response.tracks.items[i].album.name}
                    />
                }
            );
        }
        return results;
    }

    function onClick(e) {
        for (let i of playlistSongs) {
            if (i.id === e.id) {
                return
            }
        }
        setPlaylistSongs((prev) => [...prev, results[e.id]])
    }

    return (
        <div className='container'>
            <div className='results'>
                <Tracklist onClick={onClick} tracks={populateResults()} />
            </div>
            <div className='Playlist'>
                <Playlist setPlaylistSongs={setPlaylistSongs} playlistSongs={playlistSongs} />
            </div>
        </div>
    )
}

export default Results;
