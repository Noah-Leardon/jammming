import React, { useState } from 'react'
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
                uri: response.tracks.items[i].uri,
                track: <Track
                    title={response.tracks.items[i].name}
                    artist={response.tracks.items[i].artists[0].name}
                    album={response.tracks.items[i].album.name}
                    art={response.tracks.items[i].album.images[0].url}
                    />
                }
            );
        }
        return results;
    }

    function onClick(e) {
        for (let i of playlistSongs) {
            if (i.uri === e.uri) {
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
                <Playlist accessToken={props.accessToken} setPlaylistSongs={setPlaylistSongs} playlistSongs={playlistSongs} />
            </div>
        </div>
    )
}

export default Results;
