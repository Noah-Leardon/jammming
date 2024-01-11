import React, { useState } from 'react'

function Playlist(props) {
    const [playlistName, setPlaylistName] = useState("")
    const playlistUri = []
    let playlistURL 

    async function createPlaylist() {
        const userProfileUrl = 'https://api.spotify.com/v1/me';

        // Fetch user profile to get the user ID
        const profileResponse = await fetch(userProfileUrl, {
            method: 'GET',
            headers: {
            Authorization: `Bearer ${props.accessToken}`,
            },
        });

        const userProfile = await profileResponse.json();
        const userId = userProfile.id; // Use this user ID when creating a playlist

        const url = `https://api.spotify.com/v1/users/${userId}/playlists`
        const data = {
            name: playlistName,
            description: "",
            public: true
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${props.accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

            const result = await response.json();
            playlistURL = result.id
            console.log('POST request successful:', result);
        } catch (error) {
            console.error('Error during POST request:', error);
        }
    }

    async function addTracksToPlaylist(trackUris) {
        const playlistId = playlistURL;
        const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
      
        const data = {
          uris: trackUris,
          position: 0,
        };
      
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${props.accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          console.log('POST request successful:', result);
        } catch (error) {
          console.error('Error during POST request:', error);
        }
      }

    function handleChange(e) {
        setPlaylistName(e.target.value)
    }
    
    function onClick(e) {
        props.setPlaylistSongs((prev) => {
            return prev.filter((item) => item.uri !== e.uri)
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (playlistName === "") {
            alert("Please enter a playlist name!")
            return
        } 
        for (let item of props.playlistSongs) {
            playlistUri.push(item.uri)
        }
        await createPlaylist()
        await addTracksToPlaylist(playlistUri)
        props.setPlaylistSongs([])
        setPlaylistName("")
    }

    return (
        <div className='playlist'>
            <form onSubmit={handleSubmit}> 
                <input value={playlistName} onChange={handleChange} placeholder='Playlist name' />
                <button type='submit'>Create Playlist</button>
            </form>
            <ul>
                {props.playlistSongs.map((item) => (
                    <li key={item.uri}>
                        {item.track}
                        <button onClick={() => onClick(item)} id={item.uri}> - </button>
                    </li>
                ))}   
            </ul>
        </div>
    )
}

export default Playlist