import React, { useState, useEffect } from 'react';
import Results from './Results';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [accessToken, setAccessToken] = useState(null);
  const [response, setResponse] = useState(null); // Added state for response

  const clientId = '6b392af8f69a43be86c854c7a93c93c8';
  const redirectUri = 'http://localhost:3003';

  const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&scope=playlist-modify-public%20playlist-modify-private&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&prompt=login`;

  useEffect(() => {
    // Extract the access token from the URL fragment after the redirect
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const newAccessToken = urlParams.get('access_token');

    if (newAccessToken) {
      setAccessToken(newAccessToken);
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
      setResponse(result); // Set the response in state
    } catch (error) {
      console.error('Error during GET request:', error);
      setResponse(null); // Set response to null in case of an error
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!accessToken) {
      // Redirect the user to authorizationUrl if access token is not present
      window.location.href = authorizationUrl;
      return;
    }

    await searchTrack();
    // Response is now set in state, you can use it as needed
  }

  return (
    <div>
      <div className='searchBar'>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder='Find a track' />
          <button type='submit'>Search</button>
        </form>
      </div>
      {/* Display search results */}
      {response ? <Results accessToken={accessToken} response={response} /> : null}
    </div>
  );
}

export default SearchBar;
