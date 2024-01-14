import React, { useState, useEffect } from 'react';
import Results from './Results';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [accessToken, setAccessToken] = useState(null);
  const [response, setResponse] = useState(null);

  const clientId = '6b392af8f69a43be86c854c7a93c93c8';
  const redirectUri = 'https://jammming-nl.netlify.app/';

  const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&scope=playlist-modify-public%20playlist-modify-private&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token`;

  useEffect(() => {
    try {
      // Extract the access token from the URL fragment after the redirect
      const urlFragment = decodeURIComponent(window.location.hash.substring(1));
      console.log(urlFragment)

      const urlParams = new URLSearchParams(urlFragment);
      const newAccessToken = urlParams.get('access_token');
  
      if (newAccessToken) {
        setAccessToken(newAccessToken);
      }
    } catch (error) {
      console.error('Error parsing URL fragment:', error);
      // Handle the error, e.g., show an error message to the user
    }
  }, []);
  

  function handleChange(e) {
    setSearch(e.target.value);
  }

  async function searchTrack() {
    const url = `https://api.spotify.com/v1/search?q=${search}&type=track`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const result = await response.json();
      console.log('GET request successful:', result);
      setResponse(result);
    } catch (error) {
      console.error('Error during GET request:', error);
      setResponse(null);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (search === "") {
        alert("Please enter a track, artist, or album into the search bar!")
        return 
    }
    if (!accessToken) {
      // Redirect the user to authorizationUrl if access token is not present
      window.location.href = authorizationUrl;
      return;
    }

    await searchTrack();
  }

  return (
    <div className='app-container'>
      <div className='searchBar'>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder='Find a track' />
          <button type='submit'>Search</button>
        </form>
      </div>
      {response ? <Results accessToken={accessToken} response={response} /> : null}
    </div>
  );
}

export default SearchBar;
